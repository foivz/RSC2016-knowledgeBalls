var myApp = angular.module('myApp', ['ui.router', 'firebase']);

myApp.config(function($stateProvider, $urlRouterProvider) {
  var homeState = {
    name: 'home',
    url: '/home',
    templateUrl: 'templates/home.html',
    controller: 'HomeCtrl'
  }

  var quizesState = {
    name: 'quizzes',
    url: '/quizzes',
    templateUrl: 'templates/quizes.html',
    controller: 'QuizzesCtrl'
  }
  var loginState = {
    name: 'login',
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  }
  var profileState = {
    name: 'profile',
    url: '/profile',
    cache: false,
    templateUrl: 'templates/profile.html',
    controller: 'ProfileCtrl'
  }
  $stateProvider.state(homeState);
  $stateProvider.state(quizesState);
  $stateProvider.state(loginState);
  $stateProvider.state(profileState);
  $urlRouterProvider.otherwise('/home');
    
});

