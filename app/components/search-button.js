import getJSON from "appkit/utils/get-json";

export default Ember.Component.extend({
  searchTerm: null,
  aProperty: "this should change",

  triggerSearch: function () {
    this.sendAction("searchMessage", this.get('searchTerm'));
  }.on('didInsertElement'),

  triggerAutoComplete: function () {
    var self = this;
    Ember.run.debounce(null, function () {
      getJSON('/api/weather/' + self.get('searchTerm')).then(function (data) {
        window.console.log("the data inside the trigger autocomplete is %o ", data);
        self.set('aProperty', data.location);
      });
    }, 2000);
  }.observes('searchTerm'),

  actions: {
    search: function (val) {
      window.console.log("the search term in search-biutton.js is ", val);
      this.sendAction("searchMessage", val);
    }
  }
});
