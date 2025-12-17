;

wasmRunWithDebugger(
    '(module (memory 1 1)\
     (global (mut f64) (f64.const 0.5))\
     (global f32 (f32.const 3.5))\
     (func (param i32) (local f64) \
       nop \
       f64.const 1.0 \
       local.tee 1 \
       global.set 0 \
       nop) \
     (export "test" (func 0))\
     (data (i32.const 0) "Abc\\x2A"))',
    undefined,
    function ({dbg}) {
        dbg.onEnterFrame = function (frame) {
            if (frame.type != 'wasmcall') return;

            var memoryContent = frame.eval('new DataView(memory0.buffer).getUint8(3)').return;
            print(memoryContent, 42, 'valid memory content is expected (0x2A)');

            var global1AndParamSum = frame.eval('global1 + var0').return;
            print(global1AndParamSum, 3.5);

            var stepNumber = 0;
            frame.onStep = function () {
                switch (stepNumber) {
                  case 0: 
                    print(frame.offset, 65);
                    print(frame.eval('global0').return, 0.5);
                    print(frame.eval('var1').return, 0.0);
                    break;
                  case 2: 
                    print(frame.offset, 79);
                    print(frame.eval('var1').return, 1.0);
                    break;
                  case 3: 
                    print(frame.offset, 80);
                    print(frame.eval('global0').return, 1.0);
                    break;
                }
                stepNumber++;
            };
        };
  },
  function ({error}) {
      print(error, undefined);
  }
);
