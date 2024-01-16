load(libdir + "asm.js");

var g = newGlobal({newCompartment: true});
g.parent = this;
g.eval("dbg = new Debugger(parent);");


assertEq(g.dbg.allowUnobservedAsmJS, false);

var asmFunStr = USE_ASM + 'function f() {} return f';



assertAsmTypeFail(asmFunStr);


g.dbg.allowUnobservedAsmJS = true;
assertEq(asmLink(asmCompile(asmFunStr))(), undefined);


g.dbg.allowUnobservedAsmJS = false;
assertAsmTypeFail(asmFunStr);


g.dbg.removeDebuggee(this);
assertEq(asmLink(asmCompile(asmFunStr))(), undefined);
