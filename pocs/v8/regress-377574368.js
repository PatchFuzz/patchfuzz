function f(a) {
  return 'bad value: ' + a;
}
%PrepareFunctionForOptimization(f);

function g() {
  try {
    f(new String('foo'));
    throw 'lol';
  } catch (e) { }
}
%PrepareFunctionForOptimization(g);

g();
g();

%OptimizeFunctionOnNextCall(g);

g();
