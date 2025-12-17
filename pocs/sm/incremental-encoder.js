;
var test = "";



test = `
  var obj = { a: 1, b: 2 };
  obj.a++;
  print(obj.a, 2);
`;
evalWithCache(test, {
  collectDelazifications: true,
  assertEqResult : true
});



test = `
  function f() { return 1; };
  1;
`;
evalWithCache(test, {
  collectDelazifications: true,
  assertEqResult : true
});



test = `
  function f() { return 1; };
  f();
`;
evalWithCache(test, {
  collectDelazifications: true,
  assertEqResult : true
});


test = `
  function g() {
    return function f() { return 1; };
  };
  g()();
`;
evalWithCache(test, {
  collectDelazifications: true,
  assertEqResult : true
});



gczeal(0);



test = `
  print(isLazyFunction(f), generation == 0 || generation == 3);
  function f() { return isRelazifiableFunction(f); };
  expect = f();
  print(isLazyFunction(f), false);
  relazifyFunctions(f);
  print(isLazyFunction(f), expect);
`;
evalWithCache(test, { collectDelazifications: true });
