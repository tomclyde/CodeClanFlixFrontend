const MainPageView = require('./main_page_view.js');

const SplashScreen = function (button) {
  this.button = button;
};

SplashScreen.prototype.bindEvents = function () {
  this.button.addEventListener('click', (event) => {
    const mainPageDiv = document.querySelector('#main-page');
    const mainPageView = new MainPageView(mainPageDiv);
    mainPageView.render();
  });


}

module.exports = SplashScreen;
