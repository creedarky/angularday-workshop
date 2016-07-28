import angular from 'angular';
import ngRoute from 'angular-route';

//css
import './css/app.css'
import './css/animations.css'

// modules

import phonecatAnimations from './js/animations';
import phonecatControllers from './js/controllers';
import phonecatFilters from './js/filters';
import phonecatServices from './js/services';

'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
  ngRoute,
  phonecatAnimations,
  phonecatControllers,
  phonecatFilters,
  phonecatServices

]);


phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/phones', {
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
      otherwise({
        redirectTo: '/phones'
      });
  }]);

