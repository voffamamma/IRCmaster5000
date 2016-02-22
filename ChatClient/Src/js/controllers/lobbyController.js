angular.module('chatapp').controller('lobbyController'),['$scope','$location', function($scope, $location)
{
	function roomList()
	{
		socket.emit('rooms', function(){});
		socket.on('roomlist', function(list)
		{
			//ferð í gegnum öll item sem komaaa fra servernum
			//hendir hverju og ein inn i array($scope.Array)
		})	
	}
}]);