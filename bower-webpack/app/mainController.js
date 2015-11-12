(function() {
    'use strict';

    angular.module('first-webpack').controller('mainController', function ($scope) {
        $scope.content = 'James';

        $scope.$on('showView', function (event, data) {
            switch (data.view) {
                case 'home':
                    $scope.content = 'Home';
                    break;
                case 'gallery' :
                    $scope.content = 'Gallery';
                    break;
                case 'contact' :
                    $scope.content = 'Contact';
                    break;
            }
        });
    })
})();