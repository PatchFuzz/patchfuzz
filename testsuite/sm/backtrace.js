var code = `(module
  (import "env" "test" (func $i))
  (func $t (call $i))
  (export "test" (func $t))
)`;
var mod = wasmEvalText(code, {
  env: {
    test: function() {
       
       
       var s = getBacktrace();
       var frames = s.split('\n');
       assertEq(frames.length, 4);
       assertEq(/> WebAssembly.Module":wasm-function\[1\]:0x/.test(frames[1]), true);

       
       backtrace();
    }
  }
}).exports;
mod.test();
