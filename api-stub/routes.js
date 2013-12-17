var request = require('request');
var apiUrlLookup = require('./api-url-lookup');

module.exports = function(app) {

	app.get('/weather-current', function (req, res) {
    request.get(apiUrlLookup.weatherCurrentUrl).pipe(res);
	});

  app.get('/weather-forecast', function (req, res) {
    request.get(apiUrlLookup.weatherForecastUrl).pipe(res);
  });

  app.get('/image-api', function (req, res) {
    request.get(apiUrlLookup.imageApiUrl).pipe(res);
  });

};