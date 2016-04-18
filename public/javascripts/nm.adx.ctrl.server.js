(function() {
  'use strict';

  angular
    .module('nmAppDirectory')
    .controller('adxServerCtrl', adxServerCtrl);

    adxServerCtrl.$inject = [ '$scope', 'config' ];

    function adxServerCtrl ($scope, config) {
      $scope.config = config;
    }

})();