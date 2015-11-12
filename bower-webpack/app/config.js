(function() {
    'use strict';

    angular.module('first-webpack').config(config);

    function config($mdThemingProvider) {
        $mdThemingProvider.theme('blue').dark();
    }
})();