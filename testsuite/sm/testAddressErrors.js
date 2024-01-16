load(libdir + "asm.js");

setIonCheckGraphCoherency(false);


var buf = new ArrayBuffer(BUF_MIN);


assertAsmLinkFail(asmCompile('glob', 'imp', 'b', USE_ASM + 'var arr=new glob.Int8Array(b);  function f() {return arr[0x7fffffff]|0 } return f'), this, null, buf);
assertAsmLinkFail(asmCompile('glob', 'imp', 'b', USE_ASM + 'var arr=new glob.Int32Array(b); function f() {return arr[0x1fffffff]|0 } return f'), this, null, buf);



assertAsmTypeFail('glob', 'imp', 'b', USE_ASM + 'var arr=new glob.Int32Array(b); function f() {return arr[0x20000000]|0 } return f');
assertAsmTypeFail('glob', 'imp', 'b', USE_ASM + 'var arr=new glob.Int32Array(b); function f() {return arr[0x3fffffff]|0 } return f');
assertAsmTypeFail('glob', 'imp', 'b', USE_ASM + 'var arr=new glob.Int32Array(b); function f() {return arr[0x40000000]|0 } return f');
assertAsmTypeFail('glob', 'imp', 'b', USE_ASM + 'var arr=new glob.Int32Array(b); function f() {return arr[0x7fffffff]|0 } return f');
assertAsmTypeFail('glob', 'imp', 'b', USE_ASM + 'var arr=new glob.Int32Array(b); function f() {return arr[0x80000000]|0 } return f');
assertAsmTypeFail('glob', 'imp', 'b', USE_ASM + 'var arr=new glob.Int32Array(b); function f() {return arr[0x8fffffff]|0 } return f');
assertAsmTypeFail('glob', 'imp', 'b', USE_ASM + 'var arr=new glob.Int32Array(b); function f() {return arr[0xffffffff]|0 } return f');
assertAsmTypeFail('glob', 'imp', 'b', USE_ASM + 'var arr=new glob.Int32Array(b); function f() {return arr[0x100000000]|0 } return f');
assertAsmTypeFail('glob', 'imp', 'b', USE_ASM + 'var arr=new glob.Int8Array(b);  function f() {return arr[0x80000000]|0 } return f');
assertAsmTypeFail('glob', 'imp', 'b', USE_ASM + 'var arr=new glob.Int8Array(b);  function f() {return arr[0xffffffff]|0 } return f');
assertAsmTypeFail('glob', 'imp', 'b', USE_ASM + 'var arr=new glob.Int8Array(b);  function f() {return arr[0x100000000]|0 } return f');
assertAsmTypeFail('glob', 'imp', 'b', USE_ASM + 'var arr=new glob.Int16Array(b); function f() {return arr[-1]|0 } return f');
assertAsmTypeFail('glob', 'imp', 'b', USE_ASM + 'var arr=new glob.Int32Array(b); function f() {return arr[-2]|0 } return f');

assertAsmTypeFail('glob', 'imp', 'b', USE_ASM + 'var arr=new glob.Int32Array(b); function f() {return arr[10-12]|0 } return f');


assertEq(asmLink(asmCompile('glob', 'imp', 'b', USE_ASM + 'var arr=new glob.Int8Array(b);  function f() {return arr[0x3fffffff>>0]|0 } return f'), this, null, buf)(), 0);
assertEq(asmLink(asmCompile('glob', 'imp', 'b', USE_ASM + 'var arr=new glob.Int32Array(b); function f() {return arr[0x3fffffff>>2]|0 } return f'), this, null, buf)(), 0);
assertEq(asmLink(asmCompile('glob', 'imp', 'b', USE_ASM + 'var arr=new glob.Int8Array(b);  function f() {return arr[0xffffffff>>0]|0 } return f'), this, null, buf)(), 0);
assertEq(asmLink(asmCompile('glob', 'imp', 'b', USE_ASM + 'var arr=new glob.Int32Array(b); function f() {return arr[0xffffffff>>2]|0 } return f'), this, null, buf)(), 0);
assertEq(asmLink(asmCompile('glob', 'imp', 'b', USE_ASM + 'var arr=new glob.Int8Array(b);  function f() {return arr[-1>>0]|0 } return f'), this, null, buf)(), 0);
assertEq(asmLink(asmCompile('glob', 'imp', 'b', USE_ASM + 'var arr=new glob.Int32Array(b); function f() {return arr[-1>>2]|0 } return f'), this, null, buf)(), 0);

assertEq(asmLink(asmCompile('glob', 'imp', 'b', USE_ASM + 'var arr=new glob.Int8Array(b);  function f() {return arr[0xffffffff>>>0]|0 } return f'), this, null, buf)(), 0);
assertEq(asmLink(asmCompile('glob', 'imp', 'b', USE_ASM + 'var arr=new glob.Int8Array(b);  function f() {arr[0] = 1; return arr[(0xffffffff+1)>>>0]|0 } return f'), this, null, buf)(), 1);


assertAsmTypeFail('glob', 'imp', 'b', USE_ASM + 'var arr=new glob.Int8Array(b); function f() {return arr[0x100000000>>0]|0 } return f');
assertAsmTypeFail('glob', 'imp', 'b', USE_ASM + 'var arr=new glob.Int32Array(b); function f() {return arr[0x100000000>>2]|0 } return f');


assertAsmTypeFail('glob', 'imp', 'b', USE_ASM + 'var arr=new glob.Int8Array(b);  function f() {return arr[0xffffffff+1]|0 } return f');
