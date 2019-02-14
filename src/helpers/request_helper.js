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
 console.log("payload to server", payload);
 return fetch(`${this.url}/${payload.id}`, {
   method: 'PUT',
   body: JSON.stringify(payload),
   headers: { 'Content-Type': 'application/json' }
 })
   .then((response) => response.json());
};

module.exports = RequestHelper;
