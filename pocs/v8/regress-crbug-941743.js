Array(2 ** 30);


let a = [1, 2, , , , 3];
function mapping(a) {
  return a.map(v => v);
};
%PrepareFunctionForOptimization(mapping);
mapping(a);
mapping(a);
%OptimizeFunctionOnNextCall(mapping);
mapping(a);



a.length = d8.constants.maxFastArrayLength - 1;
a.fill(1, 0);
a.push(2);
a.length += 500;


mapping(a);
