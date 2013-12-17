var request = require('request')
  , Promise = require('bluebird')

var get = Promise.promisify(request.get)


var apiKeys = {
  wunderground: process.env.WUNDERGROUND_KEY,
  '500px': process.env.FIVEHUNDRED_PX_KEY
};

function buildUrl(type, lField) {
  return 'http://api.wunderground.com/api/' +
          apiKeys.wunderground + '/' +
          type + '/' +
          lField + '/' +
          '.json'
}

function weatherUrls(response) {
  var body = JSON.parse(response[1])
    , lField = body.RESULTS[0].l

  var weatherUrls = {
    conditions: buildUrl('conditions', lField),
    forecast: buildUrl('forecast', lField)
  }

  console.log(weatherUrls);
  return weatherUrls
}

function asJSON(responsePromise) {
  return responsePromise.then(function (response) {
    return JSON.parse(response[0].body)
  })
}

module.exports = function(app) {

	app.get('/api/weather/:term', function (req, finalRes) {
    var term = req.params.term
      , wundergroundQueryUrl = 'http://autocomplete.wunderground.com/aq?query=' + term

    get(wundergroundQueryUrl).then(function (response) {
      return weatherUrls(response);
    }).then(function (weatherUrls) {
      return Promise.props({
        weatherConditions: asJSON(get(weatherUrls.conditions)),
        weatherForecast: asJSON(get(weatherUrls.forecast))
      })
    }).then(function(result) {
      finalRes.send(result)
    }).catch(function (e) {
      console.log("there was an error", e)
    })

	});

};