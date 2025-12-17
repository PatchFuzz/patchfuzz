function mainFunc(inName) {
  for (i in this) {
    if (i == inName) {
       print("PASS");
    }
  }
}

mainFunc.one = 20;
child = print("crosssite_bind_child.js", "samethread");
childFunc = child.setupFunc(mainFunc);
childFunc();