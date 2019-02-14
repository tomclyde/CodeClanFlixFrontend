const SplashScreenView = require ('./views/splashscreen_view.js');
const Media = require ('./models/media.js');


document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM ready");

  function reqListener () {
    console.log(JSON.parse(this.responseText));
  }

  var xhr = new XMLHttpRequest();
  xhr.addEventListener("load", reqListener);
  xhr.open("GET", "http://localhost:5000/api/movies");
  xhr.send();

  const button = document.querySelector('#login');
  const splashScreenView = new SplashScreenView(button);
  splashScreenView.bindEvents();

  const url = "http://localhost:5000/api/movies";
  const media = new Media(url);
  media.getData();
  media.bindEvents();

});
