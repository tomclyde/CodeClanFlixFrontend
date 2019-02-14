const PubSub = require ('../helpers/pub_sub.js');
const RequestHelper = require ('../helpers/request_helper.js');

const Media = function (url) {
  this.url = url;
  this.request = new RequestHelper(this.url);
};

// Media.prototype.bindEvents = function () {
//
// };

Media.prototype.getData =  function () {
  this.request.get()
    .then((items) => {
      PubSub.publish('Media:data-ready', items);
    })
    .catch(console.error);
};

Media.prototype.bindEvents = function (){
  PubSub.subscribe('MainPageView:genre-selected', (event) => {
    const genre = event.detail;
    if (genre === 'all') {
      this.request.get()
        .then((items) => {
          PubSub.publish('Media:data-ready', items);
});
}
    else {

    this.request.get()
      .then((items) => {
        const filteredItems = items.filter((item) => {
          return item.genre === genre
        });
        PubSub.publish('Media:filtered-data-ready', filteredItems);
      })
      .catch(console.error);
    }
  });

};

module.exports = Media;
