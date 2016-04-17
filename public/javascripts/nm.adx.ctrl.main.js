(function() {
  'use strict';

  angular
    .module('nmAppDirectory')
    .controller('adxMainCtrl', adxMainCtrl);

    adxMainCtrl.$inject = [ '$scope', 'config' ];

    function adxMainCtrl ($scope, config) {
      $scope.config = config;
    }

})();