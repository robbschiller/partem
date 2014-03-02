'use strict';

var app = angular.module('partemApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/index.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
