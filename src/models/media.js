const PubSub = require ('../helpers/pub_sub.js');
const RequestHelper = require ('../helpers/request_helper.js');

const Media = function (url) {
  this.url = url;
  this.request = new RequestHelper(this.url);
};

Media.prototype.bindEvents = function () {
  console.log("subscribed?");
  PubSub.subscribe('MediaView:toggleButton-clicked', (evt) => {
    this.updateMovieItem(evt.detail);
  });
};

Media.prototype.getData =  function () {
  this.request.get()
    .then((items) => {
      console.log(items);
      PubSub.publish('Media:data-ready', items);
      console.log(items);
    })
    .catch(console.error);
};

Media.prototype.updateMovieItem = function (itemDetails) {
  this.request.put(itemDetails)
    .then((movies) => {
      PubSub.publish('Media:data-ready', movies);
    })
    .catch(console.error);
};

module.exports = Media;
