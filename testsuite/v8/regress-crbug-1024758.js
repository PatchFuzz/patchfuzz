





function f() {
  return r.test("abc");
}

function to_dict(o) {
  r.a = 42;
  r.b = 42;
  delete r.a;
}

function to_fast(o) {
  const obj = {};
  const obj2 = {};
  delete o.a;
  obj.__proto__ = o;
  obj[0] = 1;
  obj.__proto__ = obj2;
  delete obj[0];
  return o;
}



const r = /./;
to_dict(r);
to_fast(r);

%PrepareFunctionForOptimization(f);
assertTrue(f());
%OptimizeFunctionOnNextCall(f);
assertTrue(f());
