angular.module('mainApp.controllers', []).controller('mainController', function($scope, $location) {
    $scope.lang = $location.absUrl().split('lang=')[1] ? $location.absUrl().split('lang=')[1] : 'es'; 
    $scope.fullLang = $scope.lang === 'es' ? 'English' : 'Español';

    $scope.changeLang = function() {
        if ($scope.lang === 'es') {
            $scope.lang = 'en';
            $scope.fullLang = 'Español';
        } else {
            $scope.lang = 'es';
            $scope.fullLang = 'English';
        }

        window.location.href = '/?lang=' + $scope.lang;
    };
});