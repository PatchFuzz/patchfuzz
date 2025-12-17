function f(x) {
  
  
  var obj1 = {
    [undefined]: 1,
    'undefined': 1
  };
  
  var obj2 = {
    [undefined]: x,
    'undefined': 1
  };
  
  var obj3 = {
    'undefined': 1,
    [undefined]: x
  };
  var obj4 = {
    'undefined': x,
    [undefined]: 1
  };
  print(obj1.undefined, 1);
  print(obj2.undefined, 1);
  print(obj3.undefined, x);
  print(obj4.undefined, 1);
}

%PrepareFunctionForOptimization(f);
f(1);
f(1);
%OptimizeFunctionOnNextCall(f);
f(2);


function g(x) {
  var obj1 = {
    [undefined]: 1,
    [undefined]: 1
  };
  var obj2 = {
    [undefined]: 1,
    [undefined]: x
  };
  var obj3 = {
    [undefined]: x,
    [undefined]: 1
  };
  var obj4 = {
    [undefined]: x,
    [undefined]: x
  };
  print(obj1.undefined, 1);
  print(obj2.undefined, x);
  print(obj3.undefined, 1);
  print(obj4.undefined, x);
}

%PrepareFunctionForOptimization(g);
g(1);
g(1);
%OptimizeFunctionOnNextCall(g);
g(2);
