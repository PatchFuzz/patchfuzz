const g1 = newGlobal({
  principal: 0xffff
});

const g2 = newGlobal({
  principal: 0xff
});


g1.g2 = g2.g2 = g2;
g1.g1 = g2.g1 = g1;

g1.g2obj = g2.eval("new Object");

g1.evaluate(`
  const global = this;

  
  function capture(shouldIgnoreSelfHosted = true) {
    return captureFirstSubsumedFrame(global.g2obj, shouldIgnoreSelfHosted);
  }
`, {
  fileName: "script1.js"
});

g2.evaluate(`
  const capture = g1.capture;

  function getOldestFrame(stack) {
    while (stack.parent) {
      stack = stack.parent;
    }
    return stack;
  }

  function dumpStack(name, stack) {
    print("Stack " + name + " =");
    while (stack) {
      print("    " + stack.functionDisplayName + " @ " + stack.source);
      stack = stack.parent;
    }
    print();
  }

  
  
  
  
  

  (function iife1() {
    const captureTrueStack = capture(true);
    dumpStack("captureTrueStack", captureTrueStack);
    print(getOldestFrame(captureTrueStack).functionDisplayName, "iife1");
    print(getOldestFrame(captureTrueStack).source, "script2.js");

    const captureFalseStack = capture(false);
    dumpStack("captureFalseStack", captureFalseStack);
    print(getOldestFrame(captureFalseStack).functionDisplayName, "iife1");
    print(getOldestFrame(captureFalseStack).source, "script2.js");
  }());

  
  
  
  

  (function iife2() {
    const trueStack = [true].map(capture)[0];
    dumpStack("trueStack", trueStack);
    print(getOldestFrame(trueStack).functionDisplayName, "iife2");
    print(getOldestFrame(trueStack).source, "script2.js");

    const falseStack = [false].map(capture)[0];
    dumpStack("falseStack", falseStack);
    print(getOldestFrame(falseStack).functionDisplayName !== "iife2", true);
    print(getOldestFrame(falseStack).source, "self-hosted");
  }());
`, {
  fileName: "script2.js"
});
