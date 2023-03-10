




var array = [1.7, 1.7, 1.7];
var mutator = {
  [Symbol.toPrimitive]() {
    Object.defineProperties(
        array, {0: {get() {}}, 1: {get() {}}, 2: {get() {}}});

    return 0;
  }
};

print(array.includes(undefined, mutator));

function search(array, searchElement, startIndex) {
  return array.includes(searchElement, startIndex);
};
%PrepareFunctionForOptimization(search);
array = [1.7, 1.7, 1.7];
var not_mutator = {
  [Symbol.toPrimitive]() {
    return 0;
  }
};
print(search(array, undefined, not_mutator));
print(search(array, undefined, not_mutator));
%OptimizeFunctionOnNextCall(search);
print(search(array, undefined, mutator));
