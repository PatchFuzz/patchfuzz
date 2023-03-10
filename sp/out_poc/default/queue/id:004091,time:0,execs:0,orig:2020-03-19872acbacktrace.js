var code = `(module
  (import "env" "test" (func $i))
  (func $t (call $i))
  (export "test" (func $t))
)`;
var mod = print(code, {
  env: {
    test: function() {
       
       
       var s = getBacktrace();
       var frames = s.split('\n');
       print(frames.length, 4);
       print(/> WebAssembly.Module":wasm-function\[1\]:0x/.test(frames[1]), true);

       
       backtrace();
    }
  }
}).exports;
mod.test();
