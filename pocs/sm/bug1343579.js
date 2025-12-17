;

var results;
wasmRunWithDebugger(
    '(module (memory 1) ' +
    '(func $func0 i32.const 1000000 i32.load drop) ' +
    '(func (export "test") call $func0))',
    undefined,
    function ({dbg, wasmScript}) {
        results = [];
        dbg.onExceptionUnwind = function (frame, value) {
            if (frame.type != 'wasmcall') return;
            var result = wasmScript.isInCatchScope(frame.offset);
            results.push(result);
        };
  },
  function ({error}) {
      print(error !== undefined, true);
      print(results.length, 2);
      print(results[0], false);
      print(results[1], false);
  }
);
