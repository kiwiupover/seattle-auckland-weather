export default Ember.Route.extend({
  model: function (params) {
    var model = this.store.find('weather', params.term);
    window.console.log("from search route %o", model);
    return {};
  },

  actions: {
    handleSaveLocation: function (location) {
      window.alert('hello' + ' ' + location);
      // this.store.
    },
  }

});
