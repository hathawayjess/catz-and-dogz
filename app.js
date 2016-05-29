angular.module('rainingCatzAndDogz', ['ui.router'])
.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home',{
    url:'/',
    templateUrl: "./templates/homeTemp.html"
  })
  .state('catz', {
  	url:'/catz',
  	controller:'catCtrl',
  	templateUrl: "./templates/catzTemp.html"
  })
  .state('dogz', {
  	url:'/dogz',
  	controller:'dogCtrl',
  	templateUrl: "./templates/dogzTemp.html"
  })
  .state('catByID', {
  	url:'/catz/:catID',
  	controller:'catCtrl',
  	templateUrl: "./templates/catzIDTemp.html"
  })
  .state('dogByID', {
  	url:'/dogz/:dogID',
  	controller:'dogCtrl',
  	templateUrl: "./templates/dogzIDTemp.html"
  })

  $urlRouterProvider
  .otherwise('/');
});
