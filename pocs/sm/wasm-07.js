;

var offsets;
wasmRunWithDebugger(
    '(module (func (nop) (nop)) (export "test" (func 0)))',
    undefined,
    function ({dbg}) {
        offsets = [];
        dbg.onEnterFrame = function (frame) {
            if (frame.type != 'wasmcall') {
                return;
            }
            offsets.push(frame.offset);
            frame.onStep = function () {
                offsets.push(frame.offset);
            };
            frame.onPop = function () {
                offsets.push(frame.offset);
            };
        };
    },
    function ({wasmScript, error}) {
        print(error, undefined);
        print(offsets.length, 4);
        offsets.forEach(offset => {
            var loc = wasmScript.getOffsetLocation(offset);
            print(loc.isEntryPoint, true);
            print(loc.lineNumber > 0, true);
            print(loc.columnNumber > 0, true);
            print(wasmScript.getLineOffsets(loc.lineNumber).length, 1);
        });
    }
);
