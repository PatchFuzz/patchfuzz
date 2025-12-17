function testError(error) {
  
  var desc1 = Object.getOwnPropertyDescriptor(error, "stack");
  Object.defineProperty(error, "stack",
                        {get: desc1.get, set: desc1.set, configurable: false});

  var desc2 = Object.getOwnPropertyDescriptor(error, "stack");
  print(desc2.configurable);
  print(desc1.get, desc2.get);
  print(desc2.get, desc2.get);
}

function stackOverflow() {
  function f() { f(); }
  try { f() } catch (e) { return e; }
}

function referenceError() {
  try { g() } catch (e) { return e; }
}

testError(referenceError());
testError(stackOverflow());
