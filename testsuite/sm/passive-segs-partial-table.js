








const tbl_init_len = 16;

function tbl_init(min, max, backup, write, segoffs=0) {
    let ins = wasmEvalText(
        `(module
           (table (export "tbl") ${min} ${max} funcref)
           (elem func $f0 $f1 $f2 $f3 $f4 $f5 $f6 $f7 $f8 $f9 $f10 $f11 $f12 $f13 $f14 $f15)
           (func $f0 (export "f0"))
           (func $f1 (export "f1"))
           (func $f2 (export "f2"))
           (func $f3 (export "f3"))
           (func $f4 (export "f4"))
           (func $f5 (export "f5"))
           (func $f6 (export "f6"))
           (func $f7 (export "f7"))
           (func $f8 (export "f8"))
           (func $f9 (export "f9"))
           (func $f10 (export "f10"))
           (func $f11 (export "f11"))
           (func $f12 (export "f12"))
           (func $f13 (export "f13"))
           (func $f14 (export "f14"))
           (func $f15 (export "f15"))
           (func (export "run") (param $offs i32) (param $len i32)
             (table.init 0 (local.get $offs) (i32.const ${segoffs}) (local.get $len))))`);
    
    
    
    
    
    let offs = min - backup;
    assertErrorMessage(() => ins.exports.run(offs, write),
                       WebAssembly.RuntimeError,
                       /index out of bounds/);
    let tbl = ins.exports.tbl;
    for (let i=0; i < min; i++) {
        assertEq(tbl.get(i), null);
    }
}


tbl_init(tbl_init_len*2, tbl_init_len*4, Math.floor(tbl_init_len/2), tbl_init_len);
tbl_init(tbl_init_len*2, tbl_init_len*4, Math.floor(tbl_init_len/2)-1, tbl_init_len);


tbl_init(tbl_init_len*10, tbl_init_len*20, tbl_init_len*4, tbl_init_len*2);
tbl_init(tbl_init_len*10, tbl_init_len*20, tbl_init_len*4-1, tbl_init_len*2-1);


tbl_init(tbl_init_len*4, tbl_init_len*4, tbl_init_len, 0xFFFFFFF0);


tbl_init(tbl_init_len, tbl_init_len, tbl_init_len, 0xFFFFFFFC, Math.floor(tbl_init_len/2));




















const tbl_copy_len = 16;

function tbl_copy(min, max, srcOffs, targetOffs, len) {
    let ins = wasmEvalText(
        `(module
           (table (export "tbl") ${min} ${max} funcref)
           (func $f0 (export "f0"))
           (func $f1 (export "f1"))
           (func $f2 (export "f2"))
           (func $f3 (export "f3"))
           (func $f4 (export "f4"))
           (func $f5 (export "f5"))
           (func $f6 (export "f6"))
           (func $f7 (export "f7"))
           (func $f8 (export "f8"))
           (func $f9 (export "f9"))
           (func $f10 (export "f10"))
           (func $f11 (export "f11"))
           (func $f12 (export "f12"))
           (func $f13 (export "f13"))
           (func $f14 (export "f14"))
           (func $f15 (export "f15"))
           (func (export "run") (param $targetOffs i32) (param $srcOffs i32) (param $len i32)
             (table.copy (local.get $targetOffs) (local.get $srcOffs) (local.get $len))))`);

    let tbl = ins.exports.tbl;

    let copyDown = srcOffs < targetOffs;
    let targetAvail = tbl.length - targetOffs;
    let srcAvail = tbl.length - srcOffs;
    let srcLim = srcOffs + Math.min(len, targetAvail, srcAvail);

    for (let i=srcOffs, j=0; i < srcLim; i++, j++)
        tbl.set(i, ins.exports["f" + j]);
    assertErrorMessage(() => ins.exports.run(targetOffs, srcOffs, len),
                       WebAssembly.RuntimeError,
                       /index out of bounds/);

    for (var i=0, s=0; i < tbl.length; i++ ) {
        if (i >= srcOffs && i < srcLim) {
            assertEq(tbl.get(i), ins.exports["f" + (s++)]);
            continue;
        }
        assertEq(tbl.get(i), null);
    }
}


tbl_copy(tbl_copy_len*2, tbl_copy_len*4, 0, Math.floor(1.5*tbl_copy_len), tbl_copy_len);
tbl_copy(tbl_copy_len*2, tbl_copy_len*4, 0, Math.floor(1.5*tbl_copy_len)-1, tbl_copy_len-1);


tbl_copy(tbl_copy_len*2, tbl_copy_len*4, Math.floor(1.5*tbl_copy_len), 0, tbl_copy_len);
tbl_copy(tbl_copy_len*2, tbl_copy_len*4, Math.floor(1.5*tbl_copy_len)-1, 0, tbl_copy_len-1);


tbl_copy(tbl_copy_len*2, tbl_copy_len*4, tbl_copy_len-5, Math.floor(1.5*tbl_copy_len), tbl_copy_len);


tbl_copy(tbl_copy_len*2, tbl_copy_len*4, Math.floor(1.5*tbl_copy_len), tbl_copy_len-5, tbl_copy_len);


tbl_copy(tbl_copy_len*2, tbl_copy_len*4, tbl_copy_len+5, Math.floor(1.5*tbl_copy_len), tbl_copy_len);
tbl_copy(tbl_copy_len*2, tbl_copy_len*4, Math.floor(1.5*tbl_copy_len), tbl_copy_len+5, tbl_copy_len);
tbl_copy(tbl_copy_len*2, tbl_copy_len*4, tbl_copy_len+5, tbl_copy_len+5, tbl_copy_len);


tbl_copy(tbl_copy_len*8, tbl_copy_len*8, tbl_copy_len*7, 0, 0xFFFFFFE0);


tbl_copy(tbl_copy_len*8, tbl_copy_len*8, 0, tbl_copy_len*7, 0xFFFFFFE0);
