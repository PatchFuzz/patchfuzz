




















function do_test(insn1, insn2, errKind, errText,
                 isMem, haveStorage, haveInitA, haveInitP)
{
    let preamble;
    if (isMem) {
        let mem_def  = haveStorage ? "(memory 1 1)" : "";
        let mem_ia1  = `(data (i32.const 2) "\\03\\01\\04\\01")`;
        let mem_ia2  = `(data (i32.const 12) "\\07\\05\\02\\03\\06")`;
        let mem_ip1  = `(data "\\02\\07\\01\\08")`;
        let mem_ip2  = `(data "\\05\\09\\02\\07\\06")`;
        let mem_init = ``;
        if (haveInitA && haveInitP)
            mem_init = `${mem_ia1} ${mem_ip1} ${mem_ia2} ${mem_ip2}`;
        else if (haveInitA && !haveInitP) mem_init = `${mem_ia1} ${mem_ia2}`;
        else if (!haveInitA && haveInitP) mem_init = `${mem_ip1} ${mem_ip2}`;
        preamble
            = `;; -------- Memories --------
               ${mem_def}
               ;; -------- Memory initialisers --------
               ${mem_init}
              `;
    } else {
        let tab_def  = haveStorage ? "(table 30 30 funcref)" : "";
        let tab_ia1  = `(elem (i32.const 2) 3 1 4 1)`;
        let tab_ia2  = `(elem (i32.const 12) 7 5 2 3 6)`;
        let tab_ip1  = `(elem func 2 7 1 8)`;
        let tab_ip2  = `(elem func 5 9 2 7 6)`;
        let tab_init = ``;
        if (haveInitA && haveInitP)
            tab_init = `${tab_ia1} ${tab_ip1} ${tab_ia2} ${tab_ip2}`;
        else if (haveInitA && !haveInitP) tab_init = `${tab_ia1} ${tab_ia2}`;
        else if (!haveInitA && haveInitP) tab_init = `${tab_ip1} ${tab_ip2}`;
        preamble
            = `;; -------- Tables --------
               ${tab_def}
               ;; -------- Table initialisers --------
               ${tab_init}
               ;; ------ Functions (0..9) referred by the table/esegs ------
               (func (result i32) (i32.const 0))
               (func (result i32) (i32.const 1))
               (func (result i32) (i32.const 2))
               (func (result i32) (i32.const 3))
               (func (result i32) (i32.const 4))
               (func (result i32) (i32.const 5))
               (func (result i32) (i32.const 6))
               (func (result i32) (i32.const 7))
               (func (result i32) (i32.const 8))
               (func (result i32) (i32.const 9))
              `;
    }

    let txt = "(module\n" + preamble +
              `;; -------- testfn --------
               (func (export "testfn")
                 ${insn1}
                 ${insn2}
               )
               )`;

    if (!!errKind) {
        assertErrorMessage(
            () => {
                let inst = wasmEvalText(txt);
                inst.exports.testfn();
            },
            errKind,
            errText
        );
    } else {
        let inst = wasmEvalText(txt);
        assertEq(undefined, inst.exports.testfn());
    }
}




function mem_test(insn1, insn2, errKind, errText,
                  haveStorage=true, haveInitA=true, haveInitP=true) {
    do_test(insn1, insn2, errKind, errText,
            true, haveStorage, haveInitA, haveInitP);
}

function mem_test_nofail(insn1, insn2,
                         haveStorage=true, haveInitA=true, haveInitP=true) {
    do_test(insn1, insn2, undefined, undefined,
            true, haveStorage, haveInitA, haveInitP);
}

function tab_test(insn1, insn2, errKind, errText,
                  haveStorage=true, haveInitA=true, haveInitP=true) {
    do_test(insn1, insn2, errKind, errText,
            false, haveStorage, haveInitA, haveInitP);
}

function tab_test_nofail(insn1, insn2,
                         haveStorage=true, haveInitA=true, haveInitP=true) {
    do_test(insn1, insn2, undefined, undefined,
            false, haveStorage, haveInitA, haveInitP);
}






















mem_test("data.drop 0", "",
         WebAssembly.CompileError, /(data.drop segment index out of range)|(unknown data segment 0)/,
         false, false, false);



mem_test("data.drop 3", "",
         WebAssembly.CompileError,
         /active data segment requires a memory section/,
         false, true, true);


mem_test("data.drop 2", "",
         WebAssembly.CompileError, /(data.drop segment index out of range)|(unknown data segment 2)/,
         false, false, true);


mem_test_nofail("data.drop 1", "",
                false, false, true);



mem_test("(memory.init 1 (i32.const 1234) (i32.const 1) (i32.const 1))", "",
         WebAssembly.CompileError, /(can't touch memory without memory)|(unknown memory 0)/,
         false, false, false);


mem_test("data.drop 4", "",
         WebAssembly.CompileError, /(data.drop segment index out of range)|(unknown data segment 4)/);


mem_test("(memory.init 4 (i32.const 1234) (i32.const 1) (i32.const 1))", "",
         WebAssembly.CompileError, /(memory.init segment index out of range)|(unknown data segment 4)/);


mem_test("data.drop 2", "");


mem_test("(memory.init 2 (i32.const 1234) (i32.const 1) (i32.const 1))", "",
         WebAssembly.RuntimeError, /index out of bounds/);


mem_test_nofail(
    "(memory.init 1 (i32.const 1234) (i32.const 1) (i32.const 1))",
    "(memory.init 1 (i32.const 4321) (i32.const 1) (i32.const 1))");


mem_test("data.drop 1",
         "data.drop 1");


mem_test("data.drop 1",
         "(memory.init 1 (i32.const 1234) (i32.const 1) (i32.const 1))",
         WebAssembly.RuntimeError, /index out of bounds/);


mem_test("",
         "(memory.init 1 (i32.const 1234) (i32.const 0) (i32.const 5))",
         WebAssembly.RuntimeError, /index out of bounds/);


mem_test("",
         "(memory.init 1 (i32.const 1234) (i32.const 2) (i32.const 3))",
         WebAssembly.RuntimeError, /index out of bounds/);


mem_test("",
         "(memory.init 1 (i32.const 0xFFFE) (i32.const 1) (i32.const 3))",
         WebAssembly.RuntimeError, /index out of bounds/);



mem_test("",
         "(memory.init 1 (i32.const 1234) (i32.const 4) (i32.const 0))");



mem_test("",
         "(memory.init 1 (i32.const 1234) (i32.const 5) (i32.const 0))",
         WebAssembly.RuntimeError, /index out of bounds/);



mem_test("",
         "(memory.init 1 (i32.const 0x10000) (i32.const 2) (i32.const 0))");



mem_test("",
         "(memory.init 1 (i32.const 0x10001) (i32.const 2) (i32.const 0))",
         WebAssembly.RuntimeError, /index out of bounds/);


mem_test("data.drop 1 (i32.const 42)", "",
         WebAssembly.CompileError,
         /(unused values not explicitly dropped by end of block)|(values remaining on stack at end of block)/);


mem_test("(memory.init 1 (i32.const 1) (i32.const 1) (i32.const 1) (i32.const 1))",
         "",
         WebAssembly.CompileError, /(unused values)|(values remaining on stack at end of block)/);


mem_test("(memory.init 1 (i32.const 1) (i32.const 1))", "",
         WebAssembly.CompileError,
         /(popping value from empty stack)|(expected i32 but nothing on stack)/);


{
    const tys  = ['i32', 'f32', 'i64', 'f64'];

    for (let ty1 of tys) {
    for (let ty2 of tys) {
    for (let ty3 of tys) {
        if (ty1 == 'i32' && ty2 == 'i32' && ty3 == 'i32')
            continue;  
        let i1 = `(memory.init 1 (${ty1}.const 1) (${ty2}.const 1) (${ty3}.const 1))`;
        mem_test(i1, "", WebAssembly.CompileError, /type mismatch/);
    }}}
}





tab_test("elem.drop 0", "",
         WebAssembly.CompileError,
         /(element segment index out of range for elem.drop)|(segment index out of bounds)/,
         false, false, false);



tab_test("elem.drop 3", "",
         WebAssembly.CompileError,
         /active elem segment requires a table/,
         false, true, true);


tab_test("elem.drop 2", "",
         WebAssembly.CompileError,
         /(element segment index out of range for elem.drop)|(segment index out of bounds)/,
         false, false, true);


tab_test_nofail("elem.drop 1", "",
                false, false, true);



tab_test("(table.init 1 (i32.const 12) (i32.const 1) (i32.const 1))", "",
         WebAssembly.CompileError, /(table index out of range)|(table index out of bounds)/,
         false, false, false);


tab_test("elem.drop 4", "",
         WebAssembly.CompileError, /(element segment index out of range for elem.drop)|(segment index out of bounds)/);


tab_test("(table.init 4 (i32.const 12) (i32.const 1) (i32.const 1))", "",
         WebAssembly.CompileError, /(table.init segment index out of range)|(segment index out of bounds)/);


tab_test("elem.drop 2", "");


tab_test("(table.init 2 (i32.const 12) (i32.const 1) (i32.const 1))", "",
         WebAssembly.RuntimeError, /index out of bounds/);


tab_test_nofail(
    "(table.init 1 (i32.const 12) (i32.const 1) (i32.const 1))",
    "(table.init 1 (i32.const 21) (i32.const 1) (i32.const 1))");


tab_test("elem.drop 1",
         "elem.drop 1");


tab_test("elem.drop 1",
         "(table.init 1 (i32.const 12) (i32.const 1) (i32.const 1))",
         WebAssembly.RuntimeError, /index out of bounds/);


tab_test("",
         "(table.init 1 (i32.const 12) (i32.const 0) (i32.const 5))",
         WebAssembly.RuntimeError, /index out of bounds/);


tab_test("",
         "(table.init 1 (i32.const 12) (i32.const 2) (i32.const 3))",
         WebAssembly.RuntimeError, /index out of bounds/);


tab_test("",
         "(table.init 1 (i32.const 28) (i32.const 1) (i32.const 3))",
         WebAssembly.RuntimeError, /index out of bounds/);



tab_test("",
         "(table.init 1 (i32.const 12) (i32.const 4) (i32.const 0))");



tab_test("",
         "(table.init 1 (i32.const 12) (i32.const 5) (i32.const 0))",
         WebAssembly.RuntimeError, /index out of bounds/);


tab_test("",
         "(table.init 1 (i32.const 30) (i32.const 2) (i32.const 0))");



tab_test("",
         "(table.init 1 (i32.const 31) (i32.const 2) (i32.const 0))",
         WebAssembly.RuntimeError, /index out of bounds/);


tab_test("elem.drop 1 (i32.const 42)", "",
         WebAssembly.CompileError,
         /(unused values not explicitly dropped by end of block)|(values remaining on stack at end of block)/);


tab_test("(table.init 1 (i32.const 1) (i32.const 1) (i32.const 1) (i32.const 1))",
         "",
         WebAssembly.CompileError, /(unused values)|(values remaining on stack at end of block)/);


tab_test("(table.init 1 (i32.const 1) (i32.const 1))", "",
         WebAssembly.CompileError,
         /(popping value from empty stack)|(expected i32 but nothing on stack)/);


{
    const tys  = ['i32', 'f32', 'i64', 'f64'];

    const ops = ['table.init 1', 'table.copy'];
    for (let ty1 of tys) {
    for (let ty2 of tys) {
    for (let ty3 of tys) {
    for (let op of ops) {
        if (ty1 == 'i32' && ty2 == 'i32' && ty3 == 'i32')
            continue;  
        let i1 = `(${op} (${ty1}.const 1) (${ty2}.const 1) (${ty3}.const 1))`;
        tab_test(i1, "", WebAssembly.CompileError, /type mismatch/);
    }}}}
}












tab_test("(table.copy (i32.const 28) (i32.const 1) (i32.const 3))",
         "",
         WebAssembly.RuntimeError, /index out of bounds/);


tab_test("(table.copy (i32.const 0xFFFFFFFE) (i32.const 1) (i32.const 2))",
         "",
         WebAssembly.RuntimeError, /index out of bounds/);


tab_test("(table.copy (i32.const 15) (i32.const 25) (i32.const 6))",
         "",
         WebAssembly.RuntimeError, /index out of bounds/);


tab_test("(table.copy (i32.const 15) (i32.const 0xFFFFFFFE) (i32.const 2))",
         "",
         WebAssembly.RuntimeError, /index out of bounds/);


tab_test_nofail(
    "(table.copy (i32.const 15) (i32.const 25) (i32.const 0))",
    "");


tab_test("(table.copy (i32.const 30) (i32.const 15) (i32.const 0))",
         "");


tab_test("(table.copy (i32.const 31) (i32.const 15) (i32.const 0))",
         "", WebAssembly.RuntimeError, /index out of bounds/);


tab_test("(table.copy (i32.const 15) (i32.const 30) (i32.const 0))",
         "");


tab_test("(table.copy (i32.const 15) (i32.const 31) (i32.const 0))",
         "", WebAssembly.RuntimeError, /index out of bounds/);
