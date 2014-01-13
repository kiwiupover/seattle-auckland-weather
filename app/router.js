var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
  this.resource('locations', { path: '/' }, function() {
    this.resource('weather', { path: 'weather/:location_id'}, function(){
      this.route('show', {path: ':weather_id'});
      this.route('search', { path: 'search/:term' });
    });


  });
  this.route('auckland');
  this.route('honolulu');
});

Router.reopen({
  location: 'history'
});

export default Router;
