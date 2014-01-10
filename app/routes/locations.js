export default Ember.Route.extend({

  model: function(){
    var model =  this.store.find('location');
    window.console.log('the location model is %o', model);
    return model;
  },

  actions: {
    handleSaveLocation: function(location){
      var id = location.split(", ").join('-').toLocaleLowerCase(),
          saveLocation,
          locationData = {
            id: id,
            location: location
          };

      saveLocation = this.store.createRecord('location', locationData);
      saveLocation.save();
    }
  }
});
