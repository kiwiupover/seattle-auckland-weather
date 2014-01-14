export default Ember.Route.extend({

  model: function(){
    var model =  this.store.find('location');
    window.console.log('the location model is %o', model);
    return model;
  },

  setupController: function(controller, model) {
    this._super(controller, model);
    debugger;
    this.controllerFor('locationsIndex').set('content', model);
  },

  actions: {
    handleSaveLocation: function(weather){

      var id = weather.get('location').split(", ").join('-').toLowerCase();

      var createdLocation = this.store.createRecord('location', {
        id: id,
        location: weather.get('location'),
        searchField: weather.get('searchField'),
        weather: weather
      });

      createdLocation.save();
    }
  }
});
