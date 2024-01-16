load(libdir + "asserts.js");


{
    let global = newGlobal();
    let envChainObject = { a: "test1" };
    assertEq(evaluate("a", { global, envChainObject }), "test1");
}


{
    let global = newGlobal();
    var envChainObject = global.evaluate('({a: "test2"})');
    assertEq(envChainObject.a, "test2");
    assertEq(evaluate("a", { global, envChainObject }), "test2");
}



if (!isProxy(evalcx(""))) {
  
  
  assertThrowsInstanceOf(() => {
    evaluate("10", { envChainObject: evalcx("") });
  }, Error);
}



assertThrowsInstanceOf(() => {
  evaluate("10", { envChainObject: evalReturningScope("1") });
}, Error);
