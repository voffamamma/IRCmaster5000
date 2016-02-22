angular.module('chatapp').controller('lobbyController', function($scope, $location, socket)
{
	$scope.rooms = ['bla1','bla2','bla3'];
	socket.emit('rooms', function(){});
	socket.on('roomlist', function(list)
	{

		//ferð í gegnum öll item sem komaaa fra servernum
		//hendir hverju og ein inn i array($scope.Array)
	});

	function roomList()
	{
		
	}
});