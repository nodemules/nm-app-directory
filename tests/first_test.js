describe("running the test suite >>>", function() {

  it('runs a test and passes', function() {
    expect('foo').toBe('foo');
  });
});

describe('testing angular stuff >>>', function() {

  beforeEach(module('nmAppDirectory'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('testing the main controller >>', function() {

    var $scope = {},
        controllerParams,
        controller;

    controllerParams = {
      $scope: $scope
    }

    beforeEach(function(){
      controller = $controller('adxMainCtrl', controllerParams);
    });

    it('intializes the controller', function() {
      expect(controller).toBeDefined();
      expect(Object.keys($scope.views).length).toEqual(2);
      expect($scope.ctrl.viewServerVariables).toBe(false);
    });

  });

  describe('testing the server controller >>', function() {

    var $scope = {},
        controllerParams,
        config,
        controller;

    controllerParams = {
      $scope: $scope,
      config: config
    }

    beforeEach(function(){
      controller = $controller('adxServerCtrl', controllerParams);
    });

    it('intializes the controller', function() {
      expect(controller).toBeDefined();
      expect($scope.config).toBeUndefined();
    });

  });

})