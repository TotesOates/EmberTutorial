import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');

  this.route('admin', function() {
    this.route('invitation');
  });
  // this.route('library', function(){
  //   this.route('new');
  // });
  this.route('foodsites', function() {
    this.route('new');
  });
  this.route('projects');
});

export default Router;
