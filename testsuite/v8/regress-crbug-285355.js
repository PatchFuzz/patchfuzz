




























function inverted_index() {
  return ~1;
}

%NeverOptimizeFunction(inverted_index);

function crash(array) {
  return array[~inverted_index()] = 2;
};
%PrepareFunctionForOptimization(crash);
assertEquals(2, crash(new Array(1)));
assertEquals(2, crash(new Array(1)));
%OptimizeFunctionOnNextCall(crash);
assertEquals(2, crash(new Array(1)));
