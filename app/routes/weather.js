export default Ember.Route.extend({
  actions: {
    searchHandler: function (val) {
      window.console.log("the search term from the search handler is", val);
      this.transitionTo('/weather/' + encodeURIComponent(val));
    }
  }
});

