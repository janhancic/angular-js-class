app.directive( 'backButton', function ( backState, $location ) {
	return {
		replace: true,
		template: '<a ng-hide="location.path() == state.path" href="{{ state.path }}">{{ state.title }}</a>',
		scopre: {},
		link: function ( scope, el, attrs ) {
			scope.state = backState();
			scope.location = $location;
		}
	};
} );

app.factory( 'backState', function () {
	var state = { title: 'Home', path: '/' };

	return function ( title, path ) {
		if ( title == null ) {
			return state;
		}

		state.title = title;
		state.path = path;
	};
} );