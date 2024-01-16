

load(libdir + "asm.js");




var buf = new ArrayBuffer(0x8000_0000);
assertAsmLinkFail(asmCompile('glob', 'imp', 'b', USE_ASM + HEAP_IMPORTS + 'function f() { u8[' + BUF_MIN + '] = -1 } return f'), this, null, buf);
