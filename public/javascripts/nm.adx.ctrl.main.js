(function() {
  'use strict';

  angular
    .module('nmAppDirectory')
    .controller('adxMainCtrl', adxMainCtrl);

    adxMainCtrl.$inject = [ '$scope' ];

    function adxMainCtrl ($scope) {
      $scope.config = 'config';
      $scope.views = {
        serverVariables : '../views/_serverVariables.html'
      };
    }

})();