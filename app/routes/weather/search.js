export default Ember.Route.extend({
  model: function (params) {
    // var model = {name: 'erik'};
    var model = this.store.find('weather', params.term);
    window.console.log("from search route %o", model);
    return model;
  }
});