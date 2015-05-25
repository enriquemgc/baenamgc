'use strict';

angular.module('appApp')
	.controller('MainController', function ($scope, $http) {

	$scope.dbquery = function() {
		$http.get('/query').success(function(data, status, headers, config) {
	        $scope.items = data.nutrients;
	        $scope.foodName = data.Long_Desc;
	      });
	};

	$scope.dbquery();

	// $scope.items = [
 //    { name: 'Pepperoni', wanted: true },
 //    { name: 'Sausage', wanted: false },
 //    { name: 'Black Olives', wanted: true },
 //    { name: 'Green Peppers', wanted: false }
 //  ];

  });
