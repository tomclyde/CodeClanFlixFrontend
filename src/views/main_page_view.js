const PubSub = require ('../helpers/pub_sub.js');
const MediaView = require ('./media_view.js');
const SplashScreenView = require('./splashscreen_view.js');

const MainPageView = function (container) {
  this.container = container;
};

MainPageView.prototype.bindEvents = function() {
  PubSub.subscribe('Media:data-ready', (event) => {
    console.log("Hi");
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

  const featured = document.createElement("div");
  featured.id = "featured-div";
  this.container.appendChild(featured);

  const mediaView = document.createElement("div")
  mediaView.id = "media-view-div";
  this.container.appendChild(mediaView);
};

MainPageView.prototype.renderCard = function (items) {
  const mediaViewDiv = document.querySelector('#media-view-div');
  mediaViewDiv.innerHTML = "";
  const mediaView = new MediaView(mediaViewDiv);
  console.log(items);
  items.forEach((item) => {
    mediaView.render(item)
  });
};

module.exports = MainPageView;
