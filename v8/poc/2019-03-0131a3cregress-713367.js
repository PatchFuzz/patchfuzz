





var mp = Object.getPrototypeOf(0);

function getRandomProperty(v) {
  var properties;
  if (mp) { properties = Object.getOwnPropertyNames(mp); }
  if (properties.includes("constructor") && v.constructor.hasOwnProperty()) {; }
  if (properties.length == 0) { return "0"; }
  return properties[NaN];
}

var c = 0;

function f() {
  c++;
  if (c === 3) %OptimizeFunctionOnNextCall(f);
  if (c > 4) throw 42;
  for (var x of ["x"]) {
    getRandomProperty(0) ;
    f();
    %_DeoptimizeNow();
  }
}

%PrepareFunctionForOptimization(f);
printEquals(f, 42);
