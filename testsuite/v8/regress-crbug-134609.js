




























var forceDeopt = {x: 0};

var objectWithGetterProperty = function(value) {
  var obj = {};
  Object.defineProperty(obj, 'getterProperty', {
    get: function foo() {
      forceDeopt.x;
      return value;
    }
  });

  return obj;
}('bad');

function test() {
  var iAmContextAllocated = "good";
  objectWithGetterProperty.getterProperty;
  return iAmContextAllocated;

  
  function unused() {
    iAmContextAllocated;
  }
};
%PrepareFunctionForOptimization(test);
assertEquals("good", test());
assertEquals("good", test());
%OptimizeFunctionOnNextCall(test);
assertEquals("good", test());


delete forceDeopt.x;
assertEquals("good", test());
