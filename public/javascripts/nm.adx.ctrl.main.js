(function() {
  'use strict';

  angular
    .module('nmAppDirectory')
    .controller('adxMainCtrl', adxMainCtrl);

    adxMainCtrl.$inject = [ '$scope', '$http' ];

    function adxMainCtrl ($scope, $http) {
      $scope.ctrl = {
        viewServerVariables : false
      }

      $scope.views = {
        serverVariables : '../views/_serverVariables.html',
        apps : '../views/_apps.html'
      };

      function getApps() {
        $http.get('/api/apps').then(function(data) {
          $scope.apps = data.data.apps;
        })
      }

      getApps();
    }

})();