const MainPageView = require('./main_page_view.js');
const PubSub = require('../helpers/pub_sub.js');

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

  const itemImage = document.createElement('img');
  itemImage.classList.add("movie-image");
  itemImage.src = item.image;
  itemContainer.appendChild(itemImage);

  const itemLike = document.createElement("input");
  itemLike.classList.add("toggle-input");
  itemLike.type = "button";
  itemLike.value = item.like;
  itemContainer.appendChild(itemLike);

  itemLike.addEventListener('click', (event) => {
    console.log("value of liked film", itemLike.value);
    if (itemLike.value === "false"){
      item.like = true;
    }else{
      item.like = false;
    }
    const dropdown = document.querySelector('select');
    const jointKey = {id: `${item._id}`, like: item.like, genre: dropdown.value};
    console.log('jointkey', jointKey);
    PubSub.publish('MediaView:toggleButton-clicked', jointKey);

  return itemLike;
  });

  this.container.appendChild(itemContainer);
}


module.exports = MediaView;
