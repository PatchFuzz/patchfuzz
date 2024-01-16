


load(libdir + "asm.js");

enableGeckoProfiling();
enableSingleStepProfiling();
var m = asmCompile(USE_ASM + 'function f() {} return f');
asmLink(m)();
asmLink(m)();
