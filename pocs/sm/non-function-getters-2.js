with ({}) {}

function makeObjWithFunctionGetter(n) {
  var o = {};
  Object.defineProperty(o, "x", {
    get() { return n; }
  });

  return o;
}

function makeObjWithBoundGetter() {
  
  
  let orig = makeObjWithFunctionGetter(0);
  let getter = Object.getOwnPropertyDescriptor(orig, "x").get;
  let getterAddress = scriptAddressForFunction(getter);

  var inner = () => "bound";
  var bound = inner.bind(getterAddress);

  let o = {};
  Object.defineProperty(o, "x", {
    get: bound
  });
  return o;
}

function foo(o) { return o.x; }

for (var i = 0; i < 100; i++) {
  foo(makeObjWithFunctionGetter(i));
}

print(foo(makeObjWithBoundGetter()), "bound");
