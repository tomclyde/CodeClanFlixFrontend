const MainPageView = require('./main_page_view.js');
const PubSub = require('../helpers/pub_sub.js');

const MediaView = function (container) {
  this.container = container;
};

MediaView.prototype.render = function (item) {
  const itemContainer = document.createElement('div');
  itemContainer.classList.add('media-box');

  itemContainer.style.backgroundImage = `url(${item.image})`;

  const itemName = document.createElement('h2');
  itemName.textContent = item.name;
  itemContainer.appendChild(itemName);

  const innerContainer = document.createElement('div');
  innerContainer.id = "inner-container";
  itemContainer.appendChild(innerContainer);






  const itemGenre = document.createElement('p');
  itemGenre.textContent = item.genre;
  itemGenre.id = "item-genre";
  innerContainer.appendChild(itemGenre);

  const itemLanguage = document.createElement('p');
  itemLanguage.textContent = item.language;
  itemLanguage.id = "item-language";
  innerContainer.appendChild(itemLanguage);

  const itemLike = document.createElement("input");
  itemLike.id = "item-like";
  itemLike.classList.add("toggle-input");
  itemLike.type = "button";
  itemLike.value = item.like;
  if (item.like === false){
    itemLike.value = "Don't Like"
  }
  else {
    itemLike.value = "Like"
  };
  innerContainer.appendChild(itemLike);

  itemLike.addEventListener('click', (event) => {
    console.log("value of liked film", itemLike.value);
    if (itemLike.value === "Don't Like"){
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






  // itemContainer.addEventListener('mouseover', () => {
  //   const itemGenre = document.createElement('p');
  //   itemGenre.textContent = item.genre;
  //   itemGenre.id = "item-genre";
  //   innerContainer.appendChild(itemGenre);
  //
  //   const itemLanguage = document.createElement('p');
  //   itemLanguage.textContent = item.language;
  //   itemLanguage.id = "item-language";
  //   innerContainer.appendChild(itemLanguage);
  //
  //   const itemLike = document.createElement("input");
  //   itemLike.id = "item-like";
  //   itemLike.classList.add("toggle-input");
  //   itemLike.type = "button";
  //   itemLike.value = item.like;
  //   if (item.like === false){
  //     itemLike.value = "Don't Like"
  //   }
  //   else {
  //     itemLike.value = "Like"
  //   };
  //   innerContainer.appendChild(itemLike);
  //
  //   itemLike.addEventListener('click', (event) => {
  //     console.log("value of liked film", itemLike.value);
  //     if (itemLike.value === "Don't Like"){
  //       item.like = true;
  //     }else{
  //       item.like = false;
  //     }
  //     const dropdown = document.querySelector('select');
  //     const jointKey = {id: `${item._id}`, like: item.like, genre: dropdown.value};
  //     console.log('jointkey', jointKey);
  //     PubSub.publish('MediaView:toggleButton-clicked', jointKey);
  //
  //   return itemLike;
  //   });
  // });
  //
  // itemContainer.addEventListener('mouseout', () => {
  //   const itemGenre = document.querySelector('#item-genre');
  //   const itemLanguage = document.querySelector('#item-language');
  //   const itemLike = document.querySelector('#item-like');
  //   innerContainer.removeChild(itemGenre);
  //   innerContainer.removeChild(itemLanguage);
  //   innerContainer.removeChild(itemLike);
  // });



  // const itemImage = document.createElement('img');
  // itemImage.classList.add("movie-image");
  // itemImage.src = item.image;
  // itemContainer.appendChild(itemImage);



  this.container.appendChild(itemContainer);
}


module.exports = MediaView;
