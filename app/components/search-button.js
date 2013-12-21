export default Ember.Component.extend({
  searchTerm: null,

  triggerSearch: function () {
    // TODO this messes up returning to a route via url, always makes
    // the goecoded route load instead
    this.sendAction("searchMessage", this.get('searchTerm'));
  }.on('didInsertElement'),

  actions: {
    search: function (val) {
      window.console.log("the search term in search-biutton.js is ", val);
      this.sendAction("searchMessage", val);
    }
  }
});