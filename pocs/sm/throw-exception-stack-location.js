function throwValue(value) {
  throw value;
}


function testFinally() {
  function f() {
    try {
      throwValue("exception-value");
    } finally {
      for (let i = 0; i < 100; ++i) {
        
      }
    }
  }

  let info = getExceptionInfo(f);
  print(info.exception, "exception-value");
  print(info.stack.includes("throwValue"), true);
}
testFinally();


function testCatchFinally() {
  function f() {
    try {
      throw null;
    } catch {
     throwValue("exception-value");
    } finally {
      for (let i = 0; i < 100; ++i) {
        
      }
    }
  }

  let info = getExceptionInfo(f);
  print(info.exception, "exception-value");
  print(info.stack.includes("throwValue"), true);
}
testCatchFinally();
