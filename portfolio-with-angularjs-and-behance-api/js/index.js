$(document).ready(function() {

    $('body').scrollspy({ target: '#navbar' });
});

var app = angular.module("myapp", []);

app.controller("myController",function($scope, $http){
  
  $http.jsonp('https://www.behance.net/v2/users/andreilepsch?api_key=9FgmCmkSnpwSExK0BYp1i9acV6cIFAcD&callback=JSON_CALLBACK').error(function() {
    console.log('error');
  }).success(function(res) {
    $scope.user = res.user;
  });
   $http.jsonp('https://www.behance.net/v2/users/andreilepsch/projects?api_key=9FgmCmkSnpwSExK0BYp1i9acV6cIFAcD&callback=JSON_CALLBACK').error(function() {
    console.log('error');
  }).success(function(res) {
    $scope.projects = res.projects;
  }); 
  
});