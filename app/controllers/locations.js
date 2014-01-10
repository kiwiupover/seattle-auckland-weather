
var get = Ember.get;

export default Ember.ArrayController.extend({

  // needs: [],
  actions: {
    handleSaveLocation: function(location){
      debugger;
      window.alert("we are saveing " + location);
    }
  }

});
