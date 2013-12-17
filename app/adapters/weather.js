var Promise = Ember.RSVP.Promise;

function getJSON (url) {
  return new Promise(function(resolve, reject) {
    Ember.$.ajax({ // jquery + runloop + promises = fun times
      type: 'GET',
      url: url,
      success: function(data) {
        Ember.run(null, resolve, data);
      },
      error: function(err) {
        Ember.run(null, reject, err);
      }
    });
  });
}

function getCurrentWeather(term) {
  getJSON('/api/weather/' + term).then(function(queryData) {
    var lField = JSON.parse(queryData["RESULTS"][0]["l"]);
    getJSON('/forecast/q/zmw:94125.1.99999.json')
  });
}

export default DS.Adapter.extend({

  find: function(store, type, term) {
    return Ember.RSVP.hash({
      weatherCurrent: getJSON('/api/weather/' + term),
      weatherForecast: getJSON('/api/weather/' + term)
    });
  }

});

