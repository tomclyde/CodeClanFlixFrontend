const MainPageView = require('./main_page_view.js');

const SplashScreenView = function (button) {
  this.button = button;
};

SplashScreenView.prototype.bindEvents = function () {
  this.button.addEventListener('click', (event) => {
    const mainPageDiv = document.querySelector('#main-page');
    const mainPageView = new MainPageView(mainPageDiv);
    mainPageView.render();
  });


}

module.exports = SplashScreenView;
