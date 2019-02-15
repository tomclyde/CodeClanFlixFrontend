const RequestHelper = function(url) {
  this.url = url;
};

RequestHelper.prototype.get = function(urlParam) {
  const url = urlParam ? `${this.url}/${urlParam}` : this.url;
  return fetch(url)
    .then((response) => response.json())
    .catch((err) => console.error(err));
};

RequestHelper.prototype.put = function (payload) {
 console.log("this url:", this.url);
 // delete payload.genre;
 const result = {
   id: payload.id,
   like: payload.like
 };
 console.log("payload to server", result);
 return fetch(`${this.url}/${result.id}`, {
   method: 'PUT',
   body: JSON.stringify(result),
   headers: { 'Content-Type': 'application/json' }
 })
   .then((response) => response.json());
};

module.exports = RequestHelper;
