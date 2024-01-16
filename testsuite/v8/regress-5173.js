



var thrower = { [Symbol.toPrimitive]: () => FAIL };



function testTraceNativeConversion(nativeFunc) {
  var nativeFuncName = nativeFunc.name;
  try {
    nativeFunc(thrower);
    assertUnreachable(nativeFuncName);
  } catch (e) {
    assertTrue(e.stack.indexOf(nativeFuncName) >= 0, nativeFuncName);
  }
}

testTraceNativeConversion(Math.max);
testTraceNativeConversion(Math.min);

function testBuiltinInStackTrace(script, expectedString) {
  try {
    eval(script);
    assertUnreachable(expectedString);
  } catch (e) {
    assertTrue(e.stack.indexOf(expectedString) >= 0, expectedString);
  }
}

testBuiltinInStackTrace("Date.prototype.getDate.call('')", "at String.getDate");
testBuiltinInStackTrace("Date.prototype.getUTCDate.call('')",
                        "at String.getUTCDate");
testBuiltinInStackTrace("Date.prototype.getTime.call('')", "at String.getTime");

testBuiltinInStackTrace("Number(thrower);", "at Number");
testBuiltinInStackTrace("new Number(thrower);", "at new Number");
testBuiltinInStackTrace("String(thrower);", "at String");
testBuiltinInStackTrace("new String(thrower);", "at new String");


testBuiltinInStackTrace("Math.acos(thrower);", "at Math.acos");
testBuiltinInStackTrace("Math.asin(thrower);", "at Math.asin");
testBuiltinInStackTrace("Math.fround(thrower);", "at Math.fround");
testBuiltinInStackTrace("Math.imul(thrower);", "at Math.imul");


testBuiltinInStackTrace("((f, x) => f(x))(Math.acos, thrower);", "at acos");
testBuiltinInStackTrace("((f, x) => f(x))(Math.asin, thrower);", "at asin");
testBuiltinInStackTrace("((f, x) => f(x))(Math.fround, thrower);", "at fround");
testBuiltinInStackTrace("((f, x) => f(x))(Math.imul, thrower);", "at imul");
