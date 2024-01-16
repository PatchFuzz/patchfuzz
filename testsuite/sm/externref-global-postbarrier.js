const { startProfiling, endProfiling, assertEqPreciseStacks, isSingleStepProfilingEnabled } = WasmHelpers;


function Baguette(calories) {
    this.calories = calories;
}


(function() {
    wasmEvalText(`(module
        (global (mut externref) (ref.null extern))
        (func (export "f")
            global.get 0
            ref.null extern
            global.set 0
            global.set 0
        )
    )`).exports.f();
})();

let exportsPlain = wasmEvalText(`(module
    (global i32 (i32.const 42))
    (global $g (mut externref) (ref.null extern))
    (func (export "set") (param externref) local.get 0 global.set $g)
    (func (export "get") (result externref) global.get $g)
)`).exports;

let exportsObj = wasmEvalText(`(module
    (global $g (export "g") (mut externref) (ref.null extern))
    (func (export "set") (param externref) local.get 0 global.set $g)
    (func (export "get") (result externref) global.get $g)
)`).exports;


gczeal(7, 1);

for (var i = 0; i < 100; i++) {
    new Baguette(i);
}

function test(exports) {
    
    {
        let nomnom = new Baguette(15);
        exports.set(nomnom);
        nomnom = null;
    }
    new Baguette();
    assertEq(exports.get().calories, 15);
}

test(exportsPlain);
test(exportsObj);



if (!isSingleStepProfilingEnabled)
    quit(0);

enableGeckoProfiling();

const EXPECTED_STACKS = [
    
    ['', '!>', '0,!>', '<,0,!>', 'GC postbarrier,0,!>',
     '<,0,!>', '0,!>', '!>', ''],

    
    ['', '!>', '0,!>', '<,0,!>', 'filtering GC postbarrier,0,!>',
     '<,0,!>', '0,!>', '!>', ''],

    
    ['', '!>', '0,!>', '!>', ''],
];

function testStacks(exports) {
    
    {
        let nomnom = new Baguette(15);
        startProfiling();
        exports.set(nomnom);
        assertEqPreciseStacks(endProfiling(), EXPECTED_STACKS);
        nomnom = null;
    }
    new Baguette();
    assertEq(exports.get().calories, 15);
}

testStacks(exportsPlain);
testStacks(exportsObj);
