export default Ember.ArrayController.extend({
  needs: ['locations'],
  content: this.controllerFor('locations')
});
