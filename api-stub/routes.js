var request = require('request');

var apiKeys = {
  wunderground: process.env.WUNDERGROUND_KEY,
  '500px': process.env.FIVEHUNDRED_PX_KEY
};

module.exports = function(app) {

	app.get('/api/weather/:term', function (req, finalRes) {
    var term = req.params.term
    var queryUrl = 'http://autocomplete.wunderground.com/aq?query=' + term

    request.get(queryUrl, function (err, res, body) {
      if (err) { return err };
      var forecastUrl = 'http://api.wunderground.com/api/' +
                        apiKeys.wunderground +
                        '/forecast' +
                        JSON.parse(body).RESULTS[0].l +
                        '.json'

      request.get(forecastUrl).pipe(finalRes)
    })
	});

  app.get('/api/forecast/:term', function (req, res) {

    request.get(url).pipe(res);
  });

  app.get('/weather-forecast', function (req, res) {
    request.get(apiUrlLookup.weatherForecastUrl).pipe(res);
  });

  app.get('/image-api', function (req, res) {
    request.get(apiUrlLookup.imageApiUrl).pipe(res);
  });

};