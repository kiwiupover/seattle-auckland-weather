export default Ember.Component.extend({
  weather: null,

  didInsertElement: function(){
    this.$('.bg').css('background-image', 'url(' + this.get('image') + ')');
  }
});
