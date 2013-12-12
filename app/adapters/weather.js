var Promise = Ember.RSVP.Promise;

function getJSON (url, dataType) {
  return new Promise(function(resolve, reject) {
    Ember.$.ajax({
      type: 'GET', 
      url: url,
      dataType: dataType,
      success: function(data) {
        Ember.run(null, resolve, data);
      },
      error: function(err) {
        Ember.run(null, reject, err);
      }
    });
  });
}

export default DS.Adapter.extend({
  host: 'http://api.wunderground.com',
  namespace: "api/a7fc8ca637aa4a97",
  key: 'a7fc8ca637aa4a97',

  // http://api.wunderground.com/api/a7fc8ca637aa4a97/conditions/q/CA/San_Francisco.json

  buildCurrentWeatherUrl: function(type, id) {
    return this.host + '/' + this.namespace + '/conditions/q/' + id + '.json';
  },

  buildForecastWeatherUrl: function(type, id) {
    return this.host + '/' + this.namespace + '/forecast/q/' + id + '.json';
  },
  
  build500pxUrl: function(type, id) {
    var key = '&consumer_key=DhbTTmWU8YhxvMxHRkNe9mRjYgmacI7zPi0ELX3t';

    return 'https://api.500px.com/v1/photos/search?term=Honolulu&only=landscapes&rpp=1' + key;
  },

  buildSearch: function () {
    var url = "https://autocomplete.wunderground.com/aq?query=Portland";
    return $.getJSON(url + '&cb=callbackfunc', function(json) {
        window.console.log(json);
    });
  },

  callbackfunc: function(){
    alert('Josh');
  },
  
  find: function(store, type, id) {
    return Ember.RSVP.hash({
      // weatherSearch: this.buildSearch(),
      weatherCurrent: getJSON(this.buildCurrentWeatherUrl(type, id), 'jsonp'),
      weatherForecast: getJSON(this.buildForecastWeatherUrl(type, id), 'jsonp'),
      imageApi: getJSON(this.build500pxUrl(type, id), 'json')
    });


  }
});

