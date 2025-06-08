const articles = [
  {
    title: 'Art',
    description: ' Меня отдали в художественный кружок, но мне там не нравилось. Сейчас рисую для души и для друзей',
    imageSrc: 'img/image copy 2.png'
  },
  {
    title: 'Volleyboll',
    description: 'Начала играть в воллейболв школе, и на столько он меня затянул, что не могу остановиться',
    imageSrc: 'img/image copy 3.png'
  },
   {
    title: 'Journey',
    description: 'Недавно была в Египте, фотокарточку голодного верблюда с котенком прикрепляю',
    imageSrc: 'img/image copy 4.png'
  },
    {
    title: 'Dance',
    description: 'В детстве я занималась танцами около 6 лет, выступала на сцене (посмотрите какая маленькая)',
    imageSrc: 'img/image copy 6.png'
  },

];

function getArticle(article) {
  const articleContainer = document.createElement('div');
  articleContainer.classList.add('article');

  const title = document.createElement('h2');
  title.textContent = article.title;

  const description = document.createElement('p');
  description.textContent = article.description;

  const image = document.createElement('img');
  image.setAttribute('src', article.imageSrc);
  image.setAttribute('width', '320');
  image.setAttribute('height', '250');

  articleContainer.append(title, description, image)
  return articleContainer;
}

function renderArticles(articles) {
  let articlesContainer = document.querySelector('.articles');

  articles.forEach(article => {
    const articleDom = getArticle(article);
    articlesContainer.append(articleDom);
  });
}

renderArticles(articles);