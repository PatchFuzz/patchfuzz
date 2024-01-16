





load(libdir + "wasm.js");

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
        assertEq(error, undefined);
        assertEq(offsets.length, 4);
        offsets.forEach(offset => {
            var loc = wasmScript.getOffsetLocation(offset);
            assertEq(loc.isEntryPoint, true);
            assertEq(loc.lineNumber > 0, true);
            assertEq(loc.columnNumber > 0, true);
            assertEq(wasmScript.getLineOffsets(loc.lineNumber).length, 1);
        });
    }
);
