const PubSub = require ('../helpers/pub_sub.js');
const RequestHelper = require ('../helpers/request_helper.js');

const Media = function (url) {
  this.url = url;
  this.request = new RequestHelper(this.url);
}

Media.prototype.bindEvents = function () {

};

Media.prototype.getData =  function () {
  this.request.get()
    .then((items) => {
      PubSub.publish('Media:data-ready', items);
    })
    .catch(console.error);
};

module.exports = Media;
