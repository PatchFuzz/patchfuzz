;


var onEnterFrameCalled, onLeaveFrameCalled, onStepCalled;
wasmRunWithDebugger(
    '(module (func (nop) (nop)) (export "test" (func 0)))',
    undefined,
    function ({dbg}) {
        onEnterFrameCalled = 0;
        onLeaveFrameCalled = 0;
        onStepCalled = [];
        dbg.onEnterFrame = function (frame) {
            if (frame.type != 'wasmcall') return;
            onEnterFrameCalled++;
            frame.onStep = function () {
                onStepCalled.push(frame.offset);
            };
            frame.onPop = function () {
                onLeaveFrameCalled++;
            };
        };
  },
  function ({error}) {
      print(error, undefined);
      print(onEnterFrameCalled, 1);
      print(onLeaveFrameCalled, 1);
      print(onStepCalled.length, 2);
      print(onStepCalled[0] > 0, true);
      
      print(onStepCalled[0] < onStepCalled[1], true);
  }
);


wasmRunWithDebugger(
    '(module (func (nop) (nop)) (export "test" (func 0)))',
    undefined,
    function ({dbg, g}) {
        onEnterFrameCalled = 0;
        onLeaveFrameCalled = 0;
        onStepCalled = [];
        dbg.onEnterFrame = function (frame) {
            if (frame.type != 'wasmcall') return;
            onEnterFrameCalled++;
            frame.onStep = function () {
                onStepCalled.push(frame.offset);
            };
            frame.onPop = function () {
                onLeaveFrameCalled++;
            };
            dbg.removeDebuggee(g);
        };
    },
    function ({error}) {
        print(error, undefined);
        print(onEnterFrameCalled, 1);
        print(onLeaveFrameCalled, 0);
        print(onStepCalled.length, 0);
    }
);
