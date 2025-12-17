function inverted_index() {
  return ~1;
}

%NeverOptimizeFunction(inverted_index);

function crash(array) {
  return array[~inverted_index()] = 2;
};
%PrepareFunctionForOptimization(crash);
print(2, crash(new Array(1)));
print(2, crash(new Array(1)));
%OptimizeFunctionOnNextCall(crash);
print(2, crash(new Array(1)));
