const SplashScreenView = require ('./views/splashscreen_view.js');


document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM ready");

  function reqListener () {
    console.log(JSON.parse(this.responseText));
  }

  var xhr = new XMLHttpRequest();
  xhr.addEventListener("load", reqListener);
  xhr.open("GET", "http://localhost:5000/api");
  xhr.send();

  const button = document.querySelector('#login');
  const splashScreenView = new SplashScreenView(button);
  splashScreenView.bindEvents();

});
