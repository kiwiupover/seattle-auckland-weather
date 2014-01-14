export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['weather-list'],

  weather: null,
  weatherDetails: Ember.computed.alias('weather.weather')

});
