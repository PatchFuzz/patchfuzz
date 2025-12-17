var thrower = { [Symbol.toPrimitive]: () => FAIL };



function testTraceNativeConversion(nativeFunc) {
  var nativeFuncName = nativeFunc.name;
  try {
    nativeFunc(thrower);
    print(nativeFuncName);
  } catch (e) {
    print(e.stack.indexOf(nativeFuncName) >= 0, nativeFuncName);
  }
}


testTraceNativeConversion(Math.acos);
testTraceNativeConversion(Math.asin);
testTraceNativeConversion(Math.fround);
testTraceNativeConversion(Math.imul);


function testBuiltinInStackTrace(script, expectedString) {
  try {
    eval(script);
    print(expectedString);
  } catch (e) {
    print(e.stack.indexOf(expectedString) >= 0, expectedString);
  }
}


testBuiltinInStackTrace("Boolean.prototype.toString.call(thrower);",
                        "at Object.toString");


testBuiltinInStackTrace("new Date(thrower);", "at new Date");


testBuiltinInStackTrace("Math.acos(thrower);", "at Math.acos");
testBuiltinInStackTrace("Math.asin(thrower);", "at Math.asin");
testBuiltinInStackTrace("Math.fround(thrower);", "at Math.fround");
testBuiltinInStackTrace("Math.imul(thrower);", "at Math.imul");


testBuiltinInStackTrace("((f, x) => f(x))(Math.acos, thrower);", "at acos");
testBuiltinInStackTrace("((f, x) => f(x))(Math.asin, thrower);", "at asin");
testBuiltinInStackTrace("((f, x) => f(x))(Math.fround, thrower);", "at fround");
testBuiltinInStackTrace("((f, x) => f(x))(Math.imul, thrower);", "at imul");
