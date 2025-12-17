;


var onEnterFrameCalled, onLeaveFrameCalled, onStepCalled;
wasmRunWithDebugger(
    '(module (func) (func (return_call 0)) (func (call 1)) (export "test" (func 2)))',
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
      print(onEnterFrameCalled, 3);
      print(onLeaveFrameCalled, 3);
      print(onStepCalled.length, 4);
      print(onStepCalled[0] > 0, true);
  }
);


wasmRunWithDebugger(
    '(module (func) (func (return_call_indirect (i32.const 0))) (func (call 1)) (table 1 1 funcref) (elem (i32.const 0) 0) (export "test" (func 2)))',
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
      print(onEnterFrameCalled, 3);
      print(onLeaveFrameCalled, 3);
      print(onStepCalled.length, 4);
      print(onStepCalled[0] > 0, true);
  }
);


wasmRunWithDebugger(
    '(module (type $t (func)) (elem declare func 0) (func) (func (return_call_ref $t (ref.func 0))) (func (call 1)) (export "test" (func 2)))',
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
      print(onEnterFrameCalled, 3);
      print(onLeaveFrameCalled, 3);
      print(onStepCalled.length, 5);
      print(onStepCalled[0] > 0, true);
  }
);
