export default Ember.Route.extend({
  model: function(params) {
    window.console.log()
    return {blah: 'hello'};
    // return this.store.find('weather', params.location_id);
  },
  actions: {
    searchHandler: function (val) {
      window.console.log("the search term from the router is", val);
      this.transitionTo('weather.search', val);
    }
  }
});

