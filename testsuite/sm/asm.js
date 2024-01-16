

load(libdir + "asserts.js");

const USE_ASM = '"use asm";';
const HEAP_IMPORTS = "const i8=new glob.Int8Array(b);var u8=new glob.Uint8Array(b);"+
                     "const i16=new glob.Int16Array(b);var u16=new glob.Uint16Array(b);"+
                     "const i32=new glob.Int32Array(b);var u32=new glob.Uint32Array(b);"+
                     "const f32=new glob.Float32Array(b);var f64=new glob.Float64Array(b);";
const BUF_MIN = 64 * 1024;
const BUF_CHANGE_MIN = 16 * 1024 * 1024;
const BUF_64KB = new ArrayBuffer(BUF_MIN);

function asmCompile()
{
    var f = Function.apply(null, arguments);
    assertEq(!isAsmJSCompilationAvailable() || isAsmJSModule(f), true);
    return f;
}

function asmCompileCached()
{
    if (!isAsmJSCompilationAvailable())
        return Function.apply(null, arguments);

    var f = Function.apply(null, arguments);
    assertEq(isAsmJSModule(f), true);
    return f;
}

function assertAsmDirectiveFail(str)
{
    if (!isAsmJSCompilationAvailable())
        return;

    assertWarning(() => {
        eval(str)
    }, /meaningful in the Directive Prologue/);
}

function assertAsmTypeFail()
{
    if (!isAsmJSCompilationAvailable())
        return;

    
    Function.apply(null, arguments);

    
    var oldOpts = options("throw_on_asmjs_validation_failure");
    assertEq(oldOpts.indexOf("throw_on_asmjs_validation_failure"), -1);

    var caught = false;
    try {
        Function.apply(null, arguments);
    } catch (e) {
        if (!e.message.includes("asm.js type error:"))
            throw new Error("Didn't catch the expected type failure error; instead caught: " + e + "\nStack: " + new Error().stack);
        caught = true;
    }
    if (!caught)
        throw new Error("Didn't catch the type failure error");

    
    options("throw_on_asmjs_validation_failure");
}

function assertAsmLinkFail(f, ...args)
{
    if (!isAsmJSCompilationAvailable())
        return;

    assertEq(isAsmJSModule(f), true);

    
    var ret = f.apply(null, args);

    assertEq(isAsmJSFunction(ret), false);
    if (typeof ret === 'object') {
        for (var i in ret) {
            assertEq(isAsmJSFunction(ret[i]), false);
        }
    }

    assertWarning(() => {
        f.apply(null, args);
    }, /disabled by linker/);
}


function assertAsmLinkAlwaysFail(f, ...args)
{
    var caught = false;
    try {
        f.apply(null, args);
    } catch (e) {
        caught = true;
    }
    if (!caught)
        throw new Error("Didn't catch the link failure error");
}

function assertAsmLinkDeprecated(f, ...args)
{
    if (!isAsmJSCompilationAvailable())
        return;

    assertWarning(() => {
        f.apply(null, args);
    }, /asm.js type error:/)
}

function asmLink(f, ...args)
{
    if (!isAsmJSCompilationAvailable())
        return f.apply(null, args);

    var ret;
    assertNoWarning(() => {
        ret = f.apply(null, args);
    }, "No warning for asmLink")

    return ret;
}
