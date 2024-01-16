





function createHTML() {
  return '' + '<div><div><di';
};
%PrepareFunctionForOptimization(createHTML);
createHTML();
%OptimizeFunctionOnNextCall(createHTML);

/./.test(createHTML());
