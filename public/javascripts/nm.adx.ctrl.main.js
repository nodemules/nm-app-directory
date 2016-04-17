(function() {
  'use strict';

  angular
    .module('nmAppDirectory')
    .controller('adxMainCtrl', adxMainCtrl);

    adxMainCtrl.$inject = [ '$scope', 'appName'];

    function adxMainCtrl ($scope, appName) {
      $scope.app = {
        name : appName
      }
    }

})();