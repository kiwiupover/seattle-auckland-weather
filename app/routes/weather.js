export default Ember.Route.extend({
  model: function(params) {
    return {blah: 'hello'};
    // return this.store.find('weather', params.location_id);
  },
  actions: {
    handleSubmit: function (value) {
      console.log("the value is", value);
    }
  }
});

