var angular = require('angular');
var ngRoute = require('angular-route');
require('angular-resource');
require('angular-animate');
require('./css/app.css');
require('./css/animations.css');
var phonecatAnimations = require('./js/animations');
var phonecatControllers = require('./js/controllers');
var phonecatFilters = require('./js/filters');
var phonecatServices = require('./js/services');

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
