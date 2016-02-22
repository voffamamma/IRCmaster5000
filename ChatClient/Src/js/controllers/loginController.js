"use strict";

angular.module('chatapp').controller('LoginController', ['$scope', '$location', function ($scope, $location, $rootScope, $routeParams, socket) 
{
	$scope.name = '';
	$scope.errorMessage = '';

	$scope.enter = function() 
	{
		if ($scope.name === '') 
		{
			$scope.errorMessage = 'Choose a nick name';
		} 
		else 
		{
			socket.emit('adduser', $scope.name, function (available) 
			{
				if (available) {
					$location.path('/lobby/' + $scope.name);
				} else {
					$scope.errorMessage = 'This nick name is already in use!';
				}
			});
		}
	};
}]);
	//senda a serverinn socket.on
	//ng-repeat (kalla á lista)
	//unordered list í hmtl 