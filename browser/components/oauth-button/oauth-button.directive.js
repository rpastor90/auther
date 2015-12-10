'use strict';

app.directive('oauthButton', function () {
	return {
		scope: {
			providerName: '@'
		},
		restrict: 'E',
		templateUrl: '/browser/components/oauth-button/oauth-button.html',
    link: function (scope, element, attrs) {
      scope.providerName
    }
	}
});