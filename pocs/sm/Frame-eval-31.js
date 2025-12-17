;
;

evalReturningScope(`
  var x = 42;
  print(evalInFrame(0, "x"), 42);
`);
