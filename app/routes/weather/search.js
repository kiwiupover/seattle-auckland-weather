export default Ember.Route.extend({
  model: function (params) {
    var model = this.store.find('weather', params.term);
    window.console.log("from search route %o", model);
    return model;
  },

  actions: {
    // handleSaveLocation: function (location) {
    //   this.send('saveLocation');
    // },
  }

});
