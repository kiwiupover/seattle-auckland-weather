export default Ember.Route.extend({

  model: function(){
    var model =  this.store.find('location');
    window.console.log('the location model is %o', model);
    return model;
  },

  actions: {
    handleSaveLocation: function(weather){
      var id = weather.location.split(", ").join('-').toLowerCase();

      var createdLocation = this.store.createRecord('location', {
        id: id,
        location: weather.location,
        searchField: weather.searchField
      });

      createdLocation.save();
    }
  }
});
