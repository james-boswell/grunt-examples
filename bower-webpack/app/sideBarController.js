(function() {
	'use strict';

	angular.module('first-webpack').controller('sideBarController', function ($rootScope, $scope) {
		$scope.home = function() {
			$rootScope.$broadcast('showView', {
				view : 'home'
			});
		}
		$scope.gallery = function() {
			$rootScope.$broadcast('showView', {
				view : 'gallery'
			});
		}

		$scope.contact = function() {
			$rootScope.$broadcast('showView', {
				view : 'contact'
			});
		}
	});
})();