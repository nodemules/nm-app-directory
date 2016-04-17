describe("running the test suite", function() {

  it('runs a test and passes', function() {
    expect('foo').toBe('foo');
  });
});

describe('testing angular stuff', function() {

  beforeEach(module('nmAppDirectory'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('testing the main controller', function() {

    var $scope = {},
        controller;

    beforeEach(function(){
      controller = $controller('adxMainCtrl', { $scope: $scope });
    });

    it('intializes the controller', function() {
      expect(controller).toBeDefined();
      expect($scope.config).toEqual('config');
    });

  });

})