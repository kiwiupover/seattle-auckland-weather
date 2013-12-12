export default Ember.Handlebars.makeBoundHelper(function(type) {
  return new Handlebars.SafeString('<i class="icon-' + type + '"></i>');
});
