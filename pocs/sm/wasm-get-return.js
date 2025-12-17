;
;

function monitorFrameOnPopReturns(wast, expected) {
    var values = [];
    wasmRunWithDebugger(
        wast,
        undefined,
        function ({dbg}) {
            dbg.onEnterFrame = function (frame) {
                if (frame.type != 'wasmcall') return;
                frame.onPop = function (value) {
                    values.push(value.return);
                };
            };
        },
        function ({error}) {
            print(error, undefined);
        }
    );
    print(values, expected);
}

monitorFrameOnPopReturns(
  `(module (func (export "test")))`,
  [undefined]);
monitorFrameOnPopReturns(
  `(module (func (export "test") (result i32) (i32.const 42)))`,
  [42]);
monitorFrameOnPopReturns(
  `(module (func (export "test") (result f32) (f32.const 0.5)))`,
  [0.5]);
monitorFrameOnPopReturns(
  `(module (func (export "test") (result f64) (f64.const -42.75)))`,
  [-42.75]);
monitorFrameOnPopReturns(
  `(module (func (result i64) (i64.const 2)) (func (export "test") (call 0) (drop)))`,
  [2, undefined]);


var throwCount = 0;
wasmRunWithDebugger(
    '(module (func (unreachable)) (func (export "test") (result i32) (call 0) (i32.const 1)))',
    undefined,
    function ({dbg, g}) {
        dbg.onEnterFrame = function (frame) {
            if (frame.type != 'wasmcall') return;
            frame.onPop = function (value) {
                if ('throw' in value)
                    throwCount++;
            };
        };
    },
    function ({error}) {
        print(error != undefined, true);
        print(throwCount, 2);
    }
);

