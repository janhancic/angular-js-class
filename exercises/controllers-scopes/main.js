var app = angular.module( 'exercise', [] );

app.controller( 'myCtrl', function ( $scope ) {

} );

app.controller( 'listful', function ( $scope ) {
	$scope.list = [
		{ title: 'My title' },
		{ title: 'This is my title' }
	];
} );

app.controller( 'tabs', function ( $scope ) {
	$scope.tab = 'a';

	$scope.showTab = function ( selected ) {
		$scope.tab = selected;
	}
} );
