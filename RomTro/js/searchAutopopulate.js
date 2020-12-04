var app=angular.module('Home', ['ngAnimate', 'ui.bootstrap']);
  app.controller('SearchCtrl', function($scope, $http) {
    //ngModel value
    $scope.selected = undefined;
    //lookup values
    $scope.countries = [ 
      {name: 'Dwarka', code: 'AF'},
      {name: 'Rohini', code: 'AG'},
      {name: 'Noida', code: 'BS'},
      {name: 'Gurgaon', code: 'KH'},
      {name: 'Ghaziabad', code: 'CV'}
    ];
  });