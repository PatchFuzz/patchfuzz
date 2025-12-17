function test1(v) {
  var undefined = v;
  print(v === undefined, true);
  print(v !== undefined, false);
  (function inner(a) {
    print(a === undefined, true);
    print(a !== undefined, false);
  })(v);
}
test1(1);

function test2() {
  var envChainObject = {undefined: 1};
  evaluate(`var x = 1; var res1 = x === undefined; var res2 = x !== undefined;`,
           {envChainObject});
  print(envChainObject.res1, true);
  print(envChainObject.res2, false);
}
test2();
