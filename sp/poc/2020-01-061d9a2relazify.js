

;
var test = "";
gczeal(0);





test = `
  function f() { return 1; };
  print(isLazyFunction(f), generation == 0 || generation == 3);
  f();
  expect = isRelazifiableFunction(f);
  print(isLazyFunction(f), false);
`;
evalWithCache(test, {
  checkAfter: function (ctx) {
    relazifyFunctions(); 
    evaluate("print(isLazyFunction(f), expect);", ctx);
  }
});

evalWithCache(test, {
  incremental: true,
  checkAfter: function (ctx) {
    relazifyFunctions(); 
    evaluate("print(isLazyFunction(f), expect);", ctx);
  }
});
