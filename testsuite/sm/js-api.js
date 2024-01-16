












setJitCompilerOption("baseline.warmup.trigger", 2);
setJitCompilerOption("ion.warmup.trigger", 4);












var ins = wasmEvalText(`
  (module
    (import "m" "v128_param" (func $f (param v128)))
    (import "m" "v128_return" (func $g (result v128)))
    (func (export "v128_param")
      (call $f (v128.const i32x4 0 0 0 0)))
    (func (export "v128_result")
      (drop (call $g))))`,
                       {m:{v128_param: (x) => 0,
                           v128_return: () => 0}});

function call_v128_param() { ins.exports.v128_param(); }
function call_v128_result() { ins.exports.v128_result(); }

for ( let i = 0 ; i < 100; i++ ) {
    assertErrorMessage(call_v128_param,
                       TypeError,
                       /cannot pass.*v128.*to or from JS/);
    assertErrorMessage(call_v128_result,
                       TypeError,
                       /cannot pass.*v128.*to or from JS/);
}












var ins2 = wasmEvalText(`
  (module
    (func (export "v128_param") (param v128) (result i32)
      (i32.const 0))
    (func (export "v128_result") (result v128)
      (v128.const i32x4 0 0 0 0)))`);

function call_v128_param2() { ins2.exports.v128_param(); }
function call_v128_result2() { ins2.exports.v128_result(); }

for ( let i = 0 ; i < 100; i++ ) {
    assertErrorMessage(call_v128_param2,
                       TypeError,
                       /cannot pass.*v128.*to or from JS/);
    assertErrorMessage(call_v128_result2,
                       TypeError,
                       /cannot pass.*v128.*to or from JS/);
}




var newfn = (x) => x;
var ins = wasmEvalText(`
  (module
    (import "m" "fn" (func $f (param v128) (result v128)))
    (export "newfn" (func $f)))`,
                                   {m:{fn: newfn}});
assertErrorMessage(() => ins.exports.newfn(3),
                   TypeError,
                   /cannot pass.*v128.*to or from JS/);








assertErrorMessage(() => new WebAssembly.Global({value: "v128"}, 37),
                   TypeError,
                   /cannot pass.*v128.*to or from JS/);
assertErrorMessage(() => new WebAssembly.Global({value: "v128"}),
                   TypeError,
                   /cannot pass.*v128.*to or from JS/);
assertErrorMessage(() => new WebAssembly.Global({value: "v128", mutable: true}),
                   TypeError,
                   /cannot pass.*v128.*to or from JS/);




let {gi, gm} = wasmEvalText(`
  (module
    (global (export "gi") v128 v128.const i64x2 0 0)
    (global (export "gm") (mut v128) v128.const i64x2 0 0)
  )`).exports;

assertErrorMessage(() => gi.value,
                   TypeError,
                   /cannot pass.*v128.*to or from JS/);
assertErrorMessage(() => gi.valueOf(),
                   TypeError,
                   /cannot pass.*v128.*to or from JS/);
assertErrorMessage(() => gm.value = 0,
                   TypeError,
                   /cannot pass.*v128.*to or from JS/);


