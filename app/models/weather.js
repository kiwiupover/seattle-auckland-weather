
// Forecast implementation using Ember Data
// https://github.com/emberjs/data
// http://emberjs.com/guides/models

export default DS.Model.extend({
  cloudcover: DS.attr('string'),
  humidity: DS.attr('number'),  
  observationTime: DS.attr('string'),
  precipMM: DS.attr('number'),
  pressure: DS.attr('number'),
  tempC: DS.attr('string'),
  tempF: DS.attr('string'),
  visibility: DS.attr('number'),
  weatherCode: DS.attr('number'),
  weatherDesc: DS.attr('string'), 
  winddir16Point: DS.attr('string'),
  winddirDegree: DS.attr('number'),
  windspeedKmph: DS.attr('number'),
  windspeedMiles: DS.attr('number')
});
