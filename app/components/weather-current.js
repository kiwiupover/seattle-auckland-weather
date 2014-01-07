export default Ember.Component.extend({
  weather: null,

  didInsertElement: function(){
    this.$('.bg').css('background-image', 'url(' + this.get('image') + ')');
    this.$('#bg').foggy({
      blurRadius: 10
    });
  },

  actions: {
    saveLocation: function (location) {
      window.console.log("who the fuck are you", location);
      this.sendAction('saveLocationHandler', location);
    }
  }
});
