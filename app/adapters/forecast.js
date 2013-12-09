export default DS.RESTAdapter.extend({

 
  host: 'http://api.worldweatheronline.com',
  namespace: 'free/v1/weather.ashx',
  key: 'pmr8yb4zrvwg3z2cp4s4kf7u',

  buildURL: function(type, id) {
    return this.host + '/' + this.namespace + '?key=' + this.key + '&q=' + id + '&format=json';
  },

  find: function(store, type, id) {
    return $.ajax({
      dataType: 'jsonp',
      url: this.buildURL(type.typeKey, id),
      success:function(response){
        return response.data.current_condition.forEach(function(condition){ 
          return condition;
        });
      }
    });
  }
});

/*
Wunderground Api

  host: 'http://api.wunderground.com',
  namespace: "api/a7fc8ca637aa4a97",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },

  http://api.worldweatheronline.com/free/v1/weather.ashx?key=xxxxxxxxxxxxxxxxx&q=94704&num_of_days=5&format=json

*/
