const MainPageView = require('./main_page_view.js');

const MediaView = function (container) {
  this.container = container;
};

MediaView.prototype.render = function (item) {
  const itemContainer = document.createElement('div');

  const itemName = document.createElement('h2');
  itemName.textContent = item.name;
  itemContainer.appendChild(itemName);

  const itemGenre = document.createElement('p');
  itemGenre.textContent = item.genre;
  itemContainer.appendChild(itemGenre);

  const itemLanguage = document.createElement('p');
  itemLanguage.textContent = item.language;
  itemContainer.appendChild(itemLanguage);

  this.container.appendChild(itemContainer);
}

module.exports = MediaView;
