



var threshold = 2 * getJitCompilerOptions()["ion.warmup.trigger"] + 10;
function testWithJit(f) {
  for (var i = 0; i < threshold; i++) {
    f();
  }
}

function test() {
  var exports = wasmEvalText(`(module
    (func (export "f") (param i64) (result i64)
      (local.get 0)
    ))`).exports;
  var f = exports.f;

  testWithJit(() => {
    assertEq(f("5"), 5n);
  });
}

gczeal(7, 1); 
test();
