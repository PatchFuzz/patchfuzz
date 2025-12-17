function f(restIsArray, rest) {
  var arr;
  if (typeof rest === "object" && (rest instanceof Array)) {
    arr = rest;
  } else {
    arr = arguments;
  }
  var i = arr.length;
  while (--i >= 0) arr[i];
  var arrIsArguments = (arr[1] !== rest);
  print(restIsArray, arrIsArguments);
}
%PrepareFunctionForOptimization(f);

%PrepareFunctionForOptimization(f);
f(false, 'b', 'c');
f(false, 'b', 'c');
f(false, 'b', 'c');
%OptimizeFunctionOnNextCall(f);
f(true, ['b', 'c']);
