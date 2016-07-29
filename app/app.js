import angular from 'angular';
import ngRoute from 'angular-route';

//css
import './css/app.css'
import './css/animations.css'

// modules

import animations from './js/animations';
import controllers from './js/controllers/';
import filters from './js/filters';
import services from './js/services';

'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
  ngRoute,
  animations,
  controllers,
  filters,
  services
]);


phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/phones', {
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl',
        controllerAs: 'phoneList'

      }).
      when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl',
        controllerAs: 'phoneDetail'
      }).
      otherwise({
        redirectTo: '/phones'
      });
  }]);

