const PubSub = require ('../helpers/pub_sub.js');
const MediaView = require ('./media_view.js');

const MainPageView = function (container) {
  this.container = container;
};

MainPageView.prototype.render = function () {
  PubSub.subscribe('Media:data-ready', (event) => {
    this.renderCard(event.detail);
  });

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
  items.forEach((item) => {
    mediaView.render(item)
  });
};

module.exports = MainPageView;
