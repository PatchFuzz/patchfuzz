



load(libdir + "wasm.js");


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
      assertEq(error, undefined);
      assertEq(onEnterFrameCalled, 1);
      assertEq(onLeaveFrameCalled, 1);
      assertEq(onStepCalled.length, 2);
      assertEq(onStepCalled[0] > 0, true);
      
      assertEq(onStepCalled[0] < onStepCalled[1], true);
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
        assertEq(error, undefined);
        assertEq(onEnterFrameCalled, 1);
        assertEq(onLeaveFrameCalled, 0);
        assertEq(onStepCalled.length, 0);
    }
);
