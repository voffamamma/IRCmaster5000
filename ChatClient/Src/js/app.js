"use strict";

angular.module('ChatClient', ['ngRoute', 'ui.bootstrap']).config([ '$routeProvider',
	function ($routeProvider) {
		$routeProvider
			.when('/login', { templateUrl: 'views/login.html', controller: 'LoginController' })
			.otherwise({
				redirectTo: '/login'
			});
	}
]);