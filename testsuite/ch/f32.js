




var mod = new WebAssembly.Module(WebAssembly.wabt.convertWast2Wasm(`
(module
  (func (export "min") (param f32) (param f32) (result f32)
    (return (f32.min (get_local 0) (get_local 1)))
  )

  (func (export "max") (param f32) (param f32) (result f32)
    (return (f32.max (get_local 0) (get_local 1)))
  )

  (func (export "reinterpret_f2i") (param i32) (result f32)
    (return (f32.reinterpret/i32 (get_local 0)))
  )
)`));
var {min, max, reinterpret_f2i} = new WebAssembly.Instance(mod).exports;

function test(fn, expectedRes, ...args) {
  const res = fn(...args);
  if (isNaN(expectedRes)) {
    if (!isNaN(res)) {
      console.log(`Failed: ${fn}(${args.join(", ")}) expected NaN. Got ${res}`);
    }
  } else if (Object.is(expectedRes, -0)) {
    if (!Object.is(res, -0)) {
      console.log(`Failed: ${fn}(${args.join(", ")}) expected -0. Got ${res}`);
    }
  } else if (res !== Math.fround(expectedRes)) {
      console.log(`Failed: ${fn}(${args.join(", ")}) expected ${Math.fround(expectedRes)}. Got ${res}`);
  }
}

function testMin(low, high) {
  test(min, low, low, high);
  test(min, low, high, low);
}
function testMax(low, high) {
  test(max, high, low, high);
  test(max, high, high, low);
}
function testMinMax(low, high) {
  testMin(low, high);
  testMax(low, high);
}

testMinMax(11, 11.01);
testMinMax(11.01, 1/0);
testMinMax(-0, 0);
testMin(NaN, 11.01);
testMin(NaN, 11);
testMax(11.01, NaN);
testMax(-NaN, NaN);

function testReinterpret(val, expected) {
  test(reinterpret_f2i, expected, val);
}
testReinterpret(0, 0);
testReinterpret(-1, NaN);
testReinterpret(-1082130432, -1);
testReinterpret(-1081800544, -1.0393257141113281);
testReinterpret(2139095040, Infinity);
testReinterpret(-8388608, -Infinity);
testReinterpret(-8388607, NaN);

console.log("PASSED");