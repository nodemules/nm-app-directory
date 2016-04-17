(function() {
  var app = angular.module('nmAppDirectory')

  app.filter('length', lengthFilter);

  function lengthFilter() {
    return function(input){
      if (angular.isObject(input)) {
        return Object.keys(input).length;
      } else if (angular.isArray(input)) {
        return input.length;
      } else {
        throw Error("Can only return the length of objects or arrays.");
      }
    }
  }

})();