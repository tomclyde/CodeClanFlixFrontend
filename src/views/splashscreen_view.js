const MainPageView = require('./main_page_view.js');
const Media = require ('../models/media.js');

const SplashScreenView = function (button) {
  this.button = button;
};

SplashScreenView.prototype.bindEvents = function () {
  this.button.addEventListener('click', (event) => {
    const mainPageDiv = document.querySelector('#main-page');
    const mainPageView = new MainPageView(mainPageDiv);
    mainPageView.bindEvents();
    const url = "http://localhost:5000/api/movies";
    const media = new Media(url);
    media.getData();
    mainPageView.render();
  });


}

module.exports = SplashScreenView;
