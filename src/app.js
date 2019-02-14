document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM ready");

  function reqListener () {
    console.log("THIS IS NEW");
    console.log(JSON.parse(this.responseText));
  }

  var xhr = new XMLHttpRequest();
  xhr.addEventListener("load", reqListener);
  xhr.open("GET", "http://localhost:5000/api");
  xhr.send();

});
