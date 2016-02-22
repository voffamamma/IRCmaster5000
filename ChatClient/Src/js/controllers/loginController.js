"use strict";

angular.module('chatapp').controller('LoginController', ['$scope', '$location', function ($scope, $location, $rootScope, $routeParams, socket) {
	$scope.name = '';

	$scope.enter = function() {
		if ($scope.name === '') {
			//ERROR MSG, NOT EMPTY
		} else {
			socket.emit('adduser', $scope.name, function (available) {
				if (available) {
					$location.path('/lobby/' + $scope.name);
				} else {
					//ERROR MSG, USER NAME TAKEN!!!
				}
			});
		}
	};

	//senda a serverinn socket.on
	//ng-repeat (kalla á lista)
	//unordered list í hmtl 