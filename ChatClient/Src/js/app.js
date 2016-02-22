"use strict";

angular.module('chatapp', ['ngRoute', 'ui.bootstrap']).config([ '$routeProvider',
	function ($routeProvider) {
		$routeProvider
			.when('/login', { templateUrl: 'views/login.html', controller: 'LoginController' })
			.when('/lobby/:username/', { templateUrl: 'view/lobby.html', controller: 'LobbyController' })
			.otherwise({
				redirectTo: '/login'
			});
	}
]);