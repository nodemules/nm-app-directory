(function() {
  var app = angular.module('nmAppDirectory', ['ngResource', 'ui.router'])
    app.config(ApplicationState);

    ApplicationState.$inject = ['$stateProvider', '$urlRouterProvider'];

    function ApplicationState() {
      
    }

    app.run(keyLength);

    function keyLength($rootScope){
      //Just add a reference to some utility methods in rootscope.
      $rootScope.Utils = {
         keys : Object.keys
      }

      //If you want utility method to be accessed in the isolated Scope 
      //then you would add the method directly to the prototype of rootScope 
      //constructor as shown below in a rough implementation.

      //$rootScope.constructor.prototype.getKeys = Object.keys;

    }


})();