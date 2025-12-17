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
print("good", test());
print("good", test());
%OptimizeFunctionOnNextCall(test);
print("good", test());


delete forceDeopt.x;
print("good", test());
