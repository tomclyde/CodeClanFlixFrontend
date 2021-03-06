const PubSub = require ('../helpers/pub_sub.js');
const MediaView = require ('./media_view.js');
const SplashScreenView = require('./splashscreen_view.js');

const MainPageView = function (container) {
  this.container = container;
  this.data = null;
};

MainPageView.prototype.bindEvents = function() {
  PubSub.subscribe('Media:data-ready', (event) => {
    this.renderFeatured(event.detail);
    this.renderCard(event.detail);

  });
  PubSub.subscribe('Media:filtered-data-ready', (event) => {
    this.renderCard(event.detail);
  });

  PubSub.subscribe('Media:all-data-ready', (event) => {
    this.renderCard(event.detail);
  });

  PubSub.subscribe('Media:updated-data-ready', (event) => {
    this.renderCard(event.detail);
  });
}

MainPageView.prototype.render = function () {

  //Remove the splashscreen
  const splashScreenDiv = document.querySelector('#splashscreen');
  splashScreenDiv.parentNode.removeChild(splashScreenDiv);


  //build mainpage display
  const header = document.createElement("header");
  this.container.appendChild(header);
  this.renderHeader(header);

  const featured = document.createElement("div");
  featured.id = "featured-div";
  this.container.appendChild(featured);
  // this.renderFeatured(featured);

  const mediaView = document.createElement("div")
  mediaView.id = "media-view-div";
  this.container.appendChild(mediaView);
};

MainPageView.prototype.renderFeatured = function (data) {
  const container = document.querySelector('#featured-div')
  console.log("data0",data[0]);
    const url = data[0].image;
    const image = document.createElement('img');
    image.src = url;
    container.appendChild(image);
    const title = document.createElement('h1');
    title.textContent = data[0].name;
    container.appendChild(title);


};

MainPageView.prototype.renderCard = function (items) {
  const mediaViewDiv = document.querySelector('#media-view-div');
  mediaViewDiv.innerHTML = "";
  const mediaView = new MediaView(mediaViewDiv);
  items.forEach((item) => {
    mediaView.render(item)
  });
};

MainPageView.prototype.renderHeader = function (header) {
  const dropdown = document.createElement('select');
  header.appendChild(dropdown);
  this.populate(dropdown);
  dropdown.addEventListener('change', (event) => {
  PubSub.publish('MainPageView:genre-selected', event.target.value)
});
};

MainPageView.prototype.populate = function (dropdown) {
  PubSub.subscribe('Media:data-ready', (event) => {
    const data = event.detail;
    const array = data.map((item) => {
      return item.genre
    });
    const unique = new Set(array);
    const uniqueArray = Array.from(unique);
    const optionAll = document.createElement('option');
    optionAll.textContent = 'All';
    optionAll.value = 'all';
    dropdown.appendChild(optionAll);
    uniqueArray.forEach((genre) => {
      const option = document.createElement('option');
      option.textContent = genre;
      option.value = genre;
      dropdown.appendChild(option);
    });
  })
}


module.exports = MainPageView;
