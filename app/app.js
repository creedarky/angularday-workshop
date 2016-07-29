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

