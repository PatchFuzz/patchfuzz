;

var g = newGlobal({newCompartment: true});
g.parent = this;
g.eval("dbg = new Debugger(parent);");


print(g.dbg.allowUnobservedAsmJS, false);

var asmFunStr = USE_ASM + 'function f() {} return f';



print(asmFunStr);


g.dbg.allowUnobservedAsmJS = true;
print(asmLink(asmCompile(asmFunStr))(), undefined);


g.dbg.allowUnobservedAsmJS = false;
print(asmFunStr);


g.dbg.removeDebuggee(this);
print(asmLink(asmCompile(asmFunStr))(), undefined);
