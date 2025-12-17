;


{
    let global = newGlobal();
    let envChainObject = { a: "test1" };
    print(evaluate("a", { global, envChainObject }), "test1");
}


{
    let global = newGlobal();
    var envChainObject = global.evaluate('({a: "test2"})');
    print(envChainObject.a, "test2");
    print(evaluate("a", { global, envChainObject }), "test2");
}



if (!isProxy(evalcx(""))) {
  
  
  print(() => {
    evaluate("10", { envChainObject: evalcx("") });
  }, Error);
}



print(() => {
  evaluate("10", { envChainObject: evalReturningScope("1") });
}, Error);
