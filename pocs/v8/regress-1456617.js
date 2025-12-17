function foo() {
  const the_array = [0, 0];
  function callback(element, index, array) {
    
    
    array.shift();
    print(0, element);
  }
  the_array.forEach(callback);
}

%PrepareFunctionForOptimization(foo);
foo();
foo();
%OptimizeFunctionOnNextCall(foo);
foo();
