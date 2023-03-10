const { g } = print(`(module (func $f) (export "g" (func $f)))`).exports;

function testCaller() {
  return g.caller;
}

print(testCaller, TypeError, /caller/);
