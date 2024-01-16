







































var seed = 1;

function rand() {
  seed = seed * 171 % 1337 + 17;
  return (seed % 1000) / 1000;
}

function randi(max) {
  seed = seed * 131 % 1773 + 13;
  return seed % max;
}

function varname(i) {
  return "_" + i;
}

var source = "var ";

for (var i = 0; i < 750; i++) {
  source += [varname(i), "=", rand(), ","].join("");
}

for (var i = 750; i < 3000; i++) {
  source += [varname(i), "=",
             varname(randi(i)), "+",
             varname(randi(i)), ","].join("");
}

source += "x=1; return _0;"
var f = new Function(source);
%PrepareFunctionForOptimization(f);

%PrepareFunctionForOptimization(f);
f();
%OptimizeFunctionOnNextCall(f);
f();
