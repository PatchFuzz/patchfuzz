

const Module = WebAssembly.Module;
const Instance = WebAssembly.Instance;
const Table = WebAssembly.Table;

const {
    assertEqImpreciseStacks,
    assertEqPreciseStacks,
    startProfiling,
    endProfiling
} = WasmHelpers;

function test(code, importObj, expectedStacks)
{
    enableGeckoProfiling();

    var f = wasmEvalText(code, importObj).exports[""];
    startProfiling();
    f();
    assertEqImpreciseStacks(endProfiling(), expectedStacks);

    disableGeckoProfiling();
}

test(
`(module
    (func (result i32) (i32.const 42))
    (export "" (func 0))
)`,
{},
["", ">", "0,>", ">", ""]);

test(
`(module
    (func (result i32) (i32.add (call 1) (i32.const 1)))
    (func (result i32) (i32.const 42))
    (export "" (func 0))
)`,
{},
["", ">", "0,>", "1,0,>", "0,>", ">", ""]);

test(
`(module
    (func $foo (call_indirect (type 0) (i32.const 0)))
    (func $bar)
    (table funcref (elem $bar))
    (export "" (func $foo))
)`,
{},
["", ">", "0,>", "1,0,>", "0,>", ">", ""]);

test(
`(module
    (import $foo "" "foo")
    (table funcref (elem $foo))
    (func $bar (call_indirect (type 0) (i32.const 0)))
    (export "" (func $bar))
)`,
{"":{foo:()=>{}}},
["", ">", "1,>", "0,1,>", "<,0,1,>", "0,1,>", "1,>", ">", ""]);

test(`(module
    (import $f32 "Math" "sin" (param f32) (result f32))
    (func (export "") (param f32) (result f32)
        local.get 0
        call $f32
    )
)`,
this,
["", ">", "1,>", "<,1,>", "1,>", ">", ""]);

if (getBuildConfiguration()["arm-simulator"]) {
    
    for (let op of ['div_s', 'rem_s', 'div_u', 'rem_u']) {
        test(`(module
            (func (export "") (param i32) (result i32)
                local.get 0
                i64.extend_s/i32
                i64.const 0x1a2b3c4d5e6f
                i64.${op}
                i32.wrap/i64
            )
        )`,
        this,
        ["", ">", "0,>", "<,0,>", `i64.${op},0,>`, "<,0,>", "0,>", ">", ""],
        );
    }
}


test(`(module
    (memory 1)
    (func (export "") (result i32)
         memory.size
    )
)`,
this,
["", ">", "0,>", "<,0,>", "memory.size,0,>", "<,0,>", "0,>", ">", ""],
);


test(`(module
    (memory 1)
    (func (export "") (result i32)
         i32.const 1
         memory.grow
    )
)`,
this,
["", ">", "0,>", "<,0,>", "memory.grow,0,>", "<,0,>", "0,>", ">", ""],
);


for (let type of ['f32', 'f64']) {
    for (let func of ['ceil', 'floor', 'nearest', 'trunc']) {
        test(`(module
            (func (export "") (param ${type}) (result ${type})
                local.get 0
                ${type}.${func}
            )
        )`,
        this,
        ["", ">", "0,>", "<,0,>", `${type}.${func},0,>`, "<,0,>", "0,>", ">", ""]);
    }
}

(function() {
    
    function testError(code, error, expect)
    {
        enableGeckoProfiling();
        var f = wasmEvalText(code).exports[""];
        enableSingleStepProfiling();
        assertThrowsInstanceOf(f, error);
        assertEqImpreciseStacks(disableSingleStepProfiling(), expect);
        disableGeckoProfiling();
    }

    testError(
    `(module
        (func $foo (unreachable))
        (func (export "") (call $foo))
    )`,
    WebAssembly.RuntimeError,
    ["", ">", "1,>", "0,1,>", "1,>", "", ">", ""]);

    testError(
    `(module
        (type $good (func))
        (type $bad (func (param i32)))
        (func $foo (call_indirect (type $bad) (i32.const 1) (i32.const 0)))
        (func $bar (type $good))
        (table funcref (elem $bar))
        (export "" (func $foo))
    )`,
    WebAssembly.RuntimeError,
    ["", ">", "0,>", "1,0,>", ">", "", ">", ""]);
})();

(function() {
    
    var e = wasmEvalText(`
    (module
        (func $foo (result i32) (i32.const 42))
        (export "foo" (func $foo))
        (func $bar (result i32) (i32.const 13))
        (table 10 funcref)
        (elem (i32.const 0) $foo $bar)
        (export "tbl" (table 0))
    )`).exports;
    assertEq(e.foo(), 42);
    assertEq(e.tbl.get(0)(), 42);
    assertEq(e.tbl.get(1)(), 13);

    enableGeckoProfiling();
    enableSingleStepProfiling();
    assertEq(e.tbl.get(0)(), 42);
    assertEqImpreciseStacks(disableSingleStepProfiling(), ["", ">", "0,>", ">", ""]);
    disableGeckoProfiling();

    assertEq(e.foo(), 42);
    assertEq(e.tbl.get(0)(), 42);
    assertEq(e.tbl.get(1)(), 13);

    enableGeckoProfiling();
    enableSingleStepProfiling();
    assertEq(e.tbl.get(1)(), 13);
    assertEqImpreciseStacks(disableSingleStepProfiling(), ["", ">", "1,>", ">", ""]);
    disableGeckoProfiling();

    assertEq(e.tbl.get(0)(), 42);
    assertEq(e.tbl.get(1)(), 13);
    assertEq(e.foo(), 42);

    enableGeckoProfiling();
    enableSingleStepProfiling();
    assertEq(e.foo(), 42);
    assertEq(e.tbl.get(1)(), 13);
    assertEqImpreciseStacks(disableSingleStepProfiling(), ["", ">", "0,>", ">", "", ">", "1,>", ">", ""]);
    disableGeckoProfiling();

    var e2 = wasmEvalText(`
    (module
        (type $v2i (func (result i32)))
        (import "a" "b" (table 10 funcref))
        (elem (i32.const 2) $bar)
        (func $bar (result i32) (i32.const 99))
        (func $baz (param $i i32) (result i32) (call_indirect (type $v2i) (local.get $i)))
        (export "baz" (func $baz))
    )`, {a:{b:e.tbl}}).exports;

    enableGeckoProfiling();
    enableSingleStepProfiling();
    assertEq(e2.baz(0), 42);
    assertEqImpreciseStacks(disableSingleStepProfiling(), ["", ">", "1,>", "0,1,>", "1,>", ">", ""]);
    disableGeckoProfiling();

    enableGeckoProfiling();
    enableSingleStepProfiling();
    assertEq(e2.baz(1), 13);
    assertEqImpreciseStacks(disableSingleStepProfiling(), ["", ">", "1,>", "1,1,>", "1,>", ">", ""]);
    disableGeckoProfiling();

    enableGeckoProfiling();
    enableSingleStepProfiling();
    assertEq(e2.baz(2), 99);
    assertEqImpreciseStacks(disableSingleStepProfiling(), ["", ">", "1,>", "0,1,>", "1,>", ">", ""]);
    disableGeckoProfiling();
})();

(function() {
    
    var m1 = new Module(wasmTextToBinary(`(module
        (func $foo (result i32) (i32.const 42))
        (export "foo" (func $foo))
    )`));
    var m2 = new Module(wasmTextToBinary(`(module
        (import $foo "a" "foo" (result i32))
        (func $bar (result i32) (call $foo))
        (export "bar" (func $bar))
    )`));

    
    var e1 = new Instance(m1).exports;
    var e2 = new Instance(m2, {a:e1}).exports;
    enableGeckoProfiling();
    enableSingleStepProfiling();
    assertEq(e2.bar(), 42);
    assertEqImpreciseStacks(disableSingleStepProfiling(), ["", ">", "1,>", "0,1,>", "1,>", ">", ""]);
    disableGeckoProfiling();
    assertEq(e2.bar(), 42);

    
    enableGeckoProfiling();
    var e3 = new Instance(m1).exports;
    var e4 = new Instance(m2, {a:e3}).exports;
    enableSingleStepProfiling();
    assertEq(e4.bar(), 42);
    assertEqImpreciseStacks(disableSingleStepProfiling(), ["", ">", "1,>", "0,1,>", "1,>", ">", ""]);
    disableGeckoProfiling();
    assertEq(e4.bar(), 42);
})();

(function() {
    
    let prevOptions = getJitCompilerOptions();

    
    
    if (prevOptions['baseline.enable'] === 0)
        return;

    setJitCompilerOption("baseline.warmup.trigger", 10);

    enableGeckoProfiling();

    var m = new Module(wasmTextToBinary(`(module
        (import $ffi "a" "ffi" (param i32) (result i32))

        (import $missingOneArg "a" "sumTwo" (param i32) (result i32))

        (func (export "foo") (param i32) (result i32)
         local.get 0
         call $ffi)

        (func (export "id") (param i32) (result i32)
         local.get 0
         call $missingOneArg
        )
    )`));

    var valueToConvert = 0;
    function ffi(n) {
        new Error().stack; 
        if (n == 1337) { return valueToConvert };
        return 42;
    }

    function sumTwo(a, b) {
        return (a|0)+(b|0)|0;
    }

    
    for (var i = 20; i --> 0;) {
        ffi(i);
        sumTwo(i-1, i+1);
    }

    var imports = {
        a: {
            ffi,
            sumTwo
        }
    };

    var i = new Instance(m, imports).exports;

    
    assertEq(i.foo(0), 42);
    assertEq(i.id(13), 13);

    
    enableSingleStepProfiling();
    assertEq(i.foo(0), 42);
    assertEqImpreciseStacks(disableSingleStepProfiling(), ["", ">", "2,>", "<,2,>",
        
        
        "",
        
        "<,2,>",
        
        
        "",
        
        "<,2,>",
        
        "2,>", ">", ""]);

    
    enableSingleStepProfiling();
    assertEq(i.id(100), 100);
    assertEqImpreciseStacks(disableSingleStepProfiling(), ["", ">", "3,>", "<,3,>",
        
        
        "",
        "<,3,>",
        
        "",
        "<,3,>",
        "3,>", ">", ""]);

    
    valueToConvert = 2**31;

    enableSingleStepProfiling();
    assertEq(i.foo(1337), -(2**31));
    assertEqImpreciseStacks(disableSingleStepProfiling(), ["", ">", "2,>", "<,2,>", "", "<,2,>", "",
        
        
        
        "<,2,>",
        
        "2,>", ">", ""]);

    disableGeckoProfiling();
    setJitCompilerOption("baseline.warmup.trigger", prevOptions["baseline.warmup.trigger"]);
})();


(function() {
 enableGeckoProfiling();

 let g = newGlobal('');
 let dbg = new Debugger(g);
 dbg.onEnterFrame = () => {};
 enableSingleStepProfiling();
 g.eval(`
    var code = wasmTextToBinary('(module (func (export "run") (result i32) i32.const 42))');
    var i = new WebAssembly.Instance(new WebAssembly.Module(code));
    assertEq(i.exports.run(), 42);
 `);

 disableSingleStepProfiling();
 disableGeckoProfiling();
})();


let func = wasmEvalText(`(module
    (func $inner (result i32) (param i32) (param i32)
        local.get 0
        local.get 1
        i32.add
    )
    (func (export "add") (result i32) (param i32) (param i32)
     local.get 0
     local.get 1
     call $inner
    )
)`).exports.add;

(function() {
    enableGeckoProfiling();
    
    for (let i = 0; i < 10; i++) {
        enableSingleStepProfiling();
        let res = func(i - 1, i + 1);
        assertEqPreciseStacks(disableSingleStepProfiling(), [
            ['', '>', '1,>', '0,1,>' , '1,>', '>', ''],      
            ['', '!>', '1,!>', '0,1,!>' , '1,!>', '!>', ''], 
            ['', '1', '0,1' , '1', ''],                      
        ]);
        assertEq(res, i+i);
    }
    disableGeckoProfiling();
})();
