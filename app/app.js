import angular from 'angular';
import ngRoute from 'angular-route';

//css
import './css/app.css'
import './css/animations.css'

// modules

import animations from './js/animations';
import components from './js/components/';
import filters from './js/filters';
import services from './js/services';
// import mixin from 'imports?_=lodash!./js/non_node_modules/mixin'; // ugly way
import mixin from './js/non_node_modules/mixin';

// import leftPad from 'imports?window=>{}!exports?leftPad!./js/non_node_modules/leftpad'; // ugly way
import leftPad from './js/non_node_modules/leftpad';
// console.log(mixin);
// console.log(leftPad);
const result = leftPad('string to leftpad', 30, '@');
console.log(result);

'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
  ngRoute,
  animations,
  components,
  filters,
  services
]);


phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/phones', {
        template: '<phone-list/>',
      }).
      when('/phones/:phoneId', {
        template: '<phone-detail/>',
      }).
      otherwise({
        redirectTo: '/phones'
      });
  }]);

