export default Ember.Component.extend({
  weather: null,

  setupBackGroundImages: function(){
    this._setImageBackGround(this.get('image'));
  }.on('didInsertElement'),

  setImage: function(){
    this._setImageBackGround(this.get('image'));
  }.observes('image'),

  actions: {
    saveLocation: function (location) {
      this.sendAction('saveLocationHandler', location);
    }
  },

  _setImageBackGround: function(image){
    this.$('.bg').css('background-image', 'url(' + image + ')');
    this.$('#bg').foggy({
      blurRadius: 12,
      opacity: 1
    });
  }

});
