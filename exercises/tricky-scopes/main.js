var app = angular.module("exercise",[]);

app.controller( "main", function ( $scope ) {
	$scope.data = {
		count: 0
	};
} );

app.controller("child",function($scope) {
	$scope.increment = function() {
		$scope.data.count += 1
	}

	$scope.delayedIncrement = function() {
		setTimeout( function () {
			$scope.$apply(function() {
				$scope.data.count += 1
			} );
		}, 250 ); // just perceptible delay
	}
})
