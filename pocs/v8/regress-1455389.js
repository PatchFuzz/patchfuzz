let a = 42;
function* f() {
  try {
    let a = 10;
    yield 2;
    () => a;
    return "fail"
  } catch (e) {
    return a;
  }
}

%PrepareFunctionForOptimization(f);
let g = f();
print({value:2, done:false}, g.next());
print({value:42, done:true}, g.throw("hello"));

%OptimizeFunctionOnNextCall(f);
g = f();
print({value:2, done:false}, g.next());
print({value:42, done:true}, g.throw("hello"));
