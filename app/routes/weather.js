export default Ember.Route.extend({
  model: function(params) {
    return {blah: 'hello'};
    // return this.store.find('weather', params.location_id);
  },
  actions: {
    searchHandler: function (val) {
      console.log("the search term from the router is", val);
    }
  }
});

