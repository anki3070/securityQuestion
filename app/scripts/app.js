'use strict';

/**
 * @ngdoc overview
 * @name securityQuestionApp
 * @description
 * # securityQuestionApp
 *
 * Main module of the application.
 */
angular
  .module('securityQuestionApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
      })
      .when('/welcome', {
        templateUrl: 'views/welcome.html',
        controller: 'WelcomeCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .constant('SECURITY_QUESTION_CONST',{
    'QUESTION': 'Please provide a number between {0} and {1}'
  });
