// TODO: refactor me, I smell

var apiKeys = {
  wunderground: process.env.WUNDERGROUND_KEY,
  '500px': process.env.FIVEHUNDRED_PX_KEY
};

var weatherApiHost = 'http://api.wunderground.com',
    imageApiHost = 'https://api.500px.com';

/**
 * GET queries dont require oauth, but both wunderground and 500px do require
 * registered api keys be sent in URL
 */

// seperate out suffixes for api proxy server, annoying, must be better way
var currentWeatherSuffix = 'geolookup/conditions/q/WA/Seattle.json';
var weatherForecasSuffix = 'forecast/q/WA/Seattle.json';

// TODO: try putting consumer_key in the header
var imageApiSuffix = '/v1/photos/search?term=seattle&consumer_key=' + apiKeys['500px'];

var weatherApiBaseUrl = weatherApiHost + '/api/' + apiKeys.wunderground + '/';
// http://api.wunderground.com/api/asdfasdf/geolookup/conditions/q/WA/Seattle.json
var weatherCurrentUrl = weatherApiBaseUrl + currentWeatherSuffix;
// http://api.wunderground.com/api/asdfasdf/forecast/q/WA/Seattle.json
var weatherForecastUrl = weatherApiBaseUrl + weatherForecasSuffix;
// https://api.500px.com/v1/photos/search?term=seattle?consumer_key=asdfasdf
var imageApiUrl = imageApiHost + imageApiSuffix;

module.exports = {
  weatherCurrentUrl: weatherCurrentUrl,
  weatherForecastUrl: weatherForecastUrl,
  imageApiUrl: imageApiUrl
};