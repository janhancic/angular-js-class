var app = angular.module( 'exercise', [ 'ngRoute' ] );

app.controller( 'showCtrl', function ( $scope, $routeParams ) {
	$scope.pageName = $routeParams.pageName || 'root';
} );

app.config(function($locationProvider) {
	// won't work for file://
	// $locationProvider.html5Mode(true);
});

app.config( function ( $routeProvider ) {
	$routeProvider
		.when(
			'/:pageName?',
			{
				template: 'Hello <strong>{{ pageName }}</strong>',
				controller: 'showCtrl'
			}
		);
} );
