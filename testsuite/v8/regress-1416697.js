





function __isPropertyOfType() {
  return typeof type === 'undefined' || typeof desc.value === type;
}

function __getProperties(obj) {
  let properties = [];
  for (let name of Object.getOwnPropertyNames(obj)) {
    if (__isPropertyOfType()) properties.name;
  }
}

function __getRandomProperty(obj) {
  let properties = __getProperties(obj);
}

var obj = {};
Object.defineProperty(obj, "length", {});

function foo(x) {
  try {
    for (let i = 0; i < x; ++i) {
      delete obj[__getRandomProperty(obj)]();
    }
  } catch (e) {}
}

function test() {
  let result = 0.9999;
  for (let i = 0; i < 50; ++i) {
    result += foo(i);
  }
}

%PrepareFunctionForOptimization(test);
test();
test();
%OptimizeFunctionOnNextCall(test);
test();
