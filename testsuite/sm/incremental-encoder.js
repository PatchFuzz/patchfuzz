

load(libdir + 'bytecode-cache.js');
var test = "";



test = `
  var obj = { a: 1, b: 2 };
  obj.a++;
  assertEq(obj.a, 2);
`;
evalWithCache(test, {
  incremental: true,
  assertEqResult : true
});



test = `
  function f() { return 1; };
  1;
`;
evalWithCache(test, {
  incremental: true,
  assertEqResult : true
});



test = `
  function f() { return 1; };
  f();
`;
evalWithCache(test, {
  incremental: true,
  assertEqResult : true
});


test = `
  function g() {
    return function f() { return 1; };
  };
  g()();
`;
evalWithCache(test, {
  incremental: true,
  assertEqResult : true
});



gczeal(0);



test = `
  assertEq(isLazyFunction(f), generation == 0 || generation == 3);
  function f() { return isRelazifiableFunction(f); };
  expect = f();
  assertEq(isLazyFunction(f), false);
  relazifyFunctions(f);
  assertEq(isLazyFunction(f), expect);
`;
evalWithCache(test, { incremental: true });
