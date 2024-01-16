





function* generator(a) {
  a.pop().next();
};
%PrepareFunctionForOptimization(generator);
function prepareGenerators(n) {
  var a = [{ next: () => 0 }];
  for (var i = 0; i < n; ++i) {
    a.push(generator(a));
  }
  return a;
}

var gens1 = prepareGenerators(10);
assertDoesNotThrow(() => gens1.pop().next());

%OptimizeFunctionOnNextCall(generator);

var gens2 = prepareGenerators(200000);
assertThrows(() => gens2.pop().next(), RangeError);
