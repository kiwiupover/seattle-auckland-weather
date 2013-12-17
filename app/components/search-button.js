export default Ember.Component.extend({
  searchTerm: "Seattle, WA",

  actions: {
    search: function (val) {
      window.console.log("the search term in search-biutton.js is ", val);
      this.sendAction("searchMessage", val);
    }
  }
});