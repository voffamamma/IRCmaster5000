
angular.module('chatapp').controller('loginController', function ($scope, $location, $rootScope, $routeParams, socket) 
{
	$scope.nick = '';
	$scope.errorMessage = '';

	$scope.enter = function() 
	{
		console.log("blabla");
		if ($scope.nick === '') 
		{
			$scope.errorMessage = 'Choose a nick name';
			console.log($scope.errorMessage);
		} 
		else 
		{
			socket.emit('adduser', $scope.nick, function (available) 
			{
				if (available) {
					$location.path('/lobby/' + $scope.nick);
				} else {
					$scope.errorMessage = 'This nick name is already in use!';
				}
			});
		}
	};
});
	//senda a serverinn socket.on
	//ng-repeat (kalla á lista)
	//unordered list í hmtl 