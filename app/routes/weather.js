export default Ember.Route.extend({
  model: function(params) {
    window.console.log("params are %o", params);
    return this.store.find('weather', params.location_id);
  }
});

