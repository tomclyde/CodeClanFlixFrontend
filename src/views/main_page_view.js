const PubSub = require ('../helpers/pub_sub.js');

const MainPageView = function (container) {
  this.container = container;
};

MainPageView.prototype.render = function () {
  // PubSub.subscribe
  const header = document.createElement("header");
  this.container.appendChild(header);

  const featured = document.createElement("div");
  featured.id = "featured-div";
  this.container.appendChild(featured);

  const mediaView = document.createElement("div")
  mediaView.id = "media-view-div";
  this.container.appendChild(mediaView);
};

module.exports = MainPageView;
