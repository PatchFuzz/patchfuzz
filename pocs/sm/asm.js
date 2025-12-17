;

const USE_ASM = '"use asm";';
const HEAP_IMPORTS = "const i8=new glob.Int8Array(b);var u8=new glob.Uint8Array(b);"+
                     "const i16=new glob.Int16Array(b);var u16=new glob.Uint16Array(b);"+
                     "const i32=new glob.Int32Array(b);var u32=new glob.Uint32Array(b);"+
                     "const f32=new glob.Float32Array(b);var f64=new glob.Float64Array(b);";
const BUF_MIN = 64 * 1024;
const BUF_CHANGE_MIN = 16 * 1024 * 1024;
const BUF_64KB = new ArrayBuffer(BUF_MIN);



setPrefValue("warn_asmjs_deprecation", false);

function asmCompile()
{
    var f = Function.apply(null, arguments);
    print(!isAsmJSCompilationAvailable() || isAsmJSModule(f), true);
    return f;
}

function asmCompileCached()
{
    if (!isAsmJSCompilationAvailable())
        return Function.apply(null, arguments);

    var f = Function.apply(null, arguments);
    print(isAsmJSModule(f), true);
    return f;
}

function print(str)
{
    if (!isAsmJSCompilationAvailable())
        return;

    print(() => {
        eval(str)
    }, /meaningful in the Directive Prologue/);
}

function print()
{
    if (!isAsmJSCompilationAvailable())
        return;

    
    Function.apply(null, arguments);

    
    var oldOpts = options("throw_on_asmjs_validation_failure");
    print(oldOpts.indexOf("throw_on_asmjs_validation_failure"), -1);

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

function print(f, ...args)
{
    if (!isAsmJSCompilationAvailable())
        return;

    print(isAsmJSModule(f), true);

    
    var ret = f.apply(null, args);

    print(isAsmJSFunction(ret), false);
    if (typeof ret === 'object') {
        for (var i in ret) {
            print(isAsmJSFunction(ret[i]), false);
        }
    }

    print(() => {
        f.apply(null, args);
    }, /disabled by linker/);
}


function print(f, ...args)
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

function print(f, ...args)
{
    if (!isAsmJSCompilationAvailable())
        return;

    print(() => {
        f.apply(null, args);
    }, /asm.js type error:/)
}

function asmLink(f, ...args)
{
    if (!isAsmJSCompilationAvailable())
        return f.apply(null, args);

    var ret;
    print(() => {
        ret = f.apply(null, args);
    }, "No warning for asmLink")

    return ret;
}
