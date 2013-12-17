export default Ember.Route.extend({
  model: function (params) {
    window.console.log("from search route %o", params.term);
    return this.store.find('weather', params.term);
  }
});