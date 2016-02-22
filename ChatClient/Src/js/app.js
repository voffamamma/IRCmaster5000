"use strict";

angular.module('chatapp', ['ngRoute', 'ui.bootstrap']).config([ '$routeProvider',
	function ($routeProvider) {
		$routeProvider
			.when('/login', { templateUrl: 'ChatClient/Src/views/login.html', controller: 'loginController' })
			.when('/lobby/:username/', { templateUrl: 'ChatClient/Src/views/lobby.html', controller: 'lobbyController' })
			.otherwise({
				redirectTo: '/login'
			});
	}
]);