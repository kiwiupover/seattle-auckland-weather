export default Ember.Handlebars.makeBoundHelper(function(type) {
  return new Handlebars.SafeString('<i aria-hidden="true" class="icon-' + type + '"></i>');
});
