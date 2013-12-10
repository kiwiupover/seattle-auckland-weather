var Promise = Ember.RSVP.Promise;

function getJSON (url) {
  var self = this;
  return new Promise(function(resolve, reject) {
    Ember.$.ajax({
      url: url,
      dataType: 'jsonp',
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

  find: function(store, type, id) {

    return new Promise(function(resolve, reject) {
      return getJSON('http://autocomplete.wunderground.com/aq?query=Seattle').then(function(data) {
        resolve(data);
      });
    });
    

  }
});

