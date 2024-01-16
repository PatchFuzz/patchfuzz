let conf = getBuildConfiguration();
if (conf.debug &&
    (conf["arm-simulator"] || conf["arm64-simulator"] ||
     conf["mips32-simulator"] || conf["mips64-simulator"]))
{
    
    quit(0);
}



const PAGESIZE = 65536;






function mem_fill(min, max, shared, backup, write=backup*2) {
    if (shared == "shared" && !sharedMemoryEnabled())
        return;
    let ins = wasmEvalText(
        `(module
           (memory (export "mem") ${min} ${max} ${shared})
           (func (export "run") (param $offs i32) (param $val i32) (param $len i32)
             (memory.fill (local.get $offs) (local.get $val) (local.get $len))))`);
    
    
    let offs = min*PAGESIZE - backup;
    let val = 37;
    assertErrorMessage(() => ins.exports.run(offs, val, write),
                       WebAssembly.RuntimeError,
                       /index out of bounds/);
    let v = new Uint8Array(ins.exports.mem.buffer);
    for (let i=0; i < backup; i++)
        assertEq(v[offs+i], 0);
    for (let i=0; i < offs; i++)
        assertEq(v[i], 0);
}

mem_fill(1, 1, "", 256);
mem_fill(1, 1, "", 257);
mem_fill(1, 1, "", 257, 0xFFFFFFFF); 

mem_fill(2, 4, "shared", 256);
mem_fill(2, 4, "shared", 257);
mem_fill(2, 4, "shared", 257, 0xFFFFFFFF); 








const mem_init_len = 16;

function mem_init(min, max, shared, backup, write) {
    if (shared == "shared" && !sharedMemoryEnabled())
        return;
    let ins = wasmEvalText(
        `(module
           (memory (export "mem") ${min} ${max} ${shared})
           (data "\\42\\42\\42\\42\\42\\42\\42\\42\\42\\42\\42\\42\\42\\42\\42\\42")
           (func (export "run") (param $offs i32) (param $len i32)
             (memory.init 0 (local.get $offs) (i32.const 0) (local.get $len))))`);
    
    
    
    
    
    let offs = min*PAGESIZE - backup;
    assertErrorMessage(() => ins.exports.run(offs, write),
                       WebAssembly.RuntimeError,
                       /index out of bounds/);
    let v = new Uint8Array(ins.exports.mem.buffer);
    for (let i=0; i < min; i++)
        assertEq(v[offs + i], 0);
}


mem_init(1, 1, "", Math.floor(mem_init_len/2), mem_init_len);
mem_init(1, 1, "", Math.floor(mem_init_len/2)+1, mem_init_len);
mem_init(2, 4, "shared", Math.floor(mem_init_len/2), mem_init_len);
mem_init(2, 4, "shared", Math.floor(mem_init_len/2)+1, mem_init_len);


mem_init(1, 1, "", mem_init_len*4, mem_init_len*2-2);
mem_init(1, 1, "", mem_init_len*4-1, mem_init_len*2-1);
mem_init(2, 4, "shared", mem_init_len*4, mem_init_len*2-2);
mem_init(2, 4, "shared", mem_init_len*4-1, mem_init_len*2-1);


mem_init(1, "", "", Math.floor(mem_init_len/2), 0xFFFFFF00);


mem_init(1, "", "", PAGESIZE, 0xFFFFFFFC);

















function mem_copy(min, max, shared, srcOffs, targetOffs, len) {
    if (shared == "shared" && !sharedMemoryEnabled())
        return;
    let ins = wasmEvalText(
        `(module
           (memory (export "mem") ${min} ${max} ${shared})
           (func (export "run") (param $targetOffs i32) (param $srcOffs i32) (param $len i32)
             (memory.copy (local.get $targetOffs) (local.get $srcOffs) (local.get $len))))`);

    let v = new Uint8Array(ins.exports.mem.buffer);

    let copyDown = srcOffs < targetOffs;
    let targetAvail = v.length - targetOffs;
    let srcAvail = v.length - srcOffs;
    let srcLim = srcOffs + Math.min(len, targetAvail, srcAvail);

    for (let i=srcOffs, j=0; i < srcLim; i++, j++)
        v[i] = j;
    assertErrorMessage(() => ins.exports.run(targetOffs, srcOffs, len),
                       WebAssembly.RuntimeError,
                       /index out of bounds/);

    for (var i=0, s=0; i < v.length; i++ ) {
        if (i >= srcOffs && i < srcLim) {
            assertEq(v[i], (s++) & 0xFF);
            continue;
        }
        assertEq(v[i], 0);
    }
}


mem_copy(1, 1, "", 0, PAGESIZE-20, 40);
mem_copy(1, 1, "", 0, PAGESIZE-21, 39);
mem_copy(2, 4, "shared", 0, 2*PAGESIZE-20, 40);
mem_copy(2, 4, "shared", 0, 2*PAGESIZE-21, 39);


mem_copy(1, 1, "", PAGESIZE-20, 0, 40);
mem_copy(1, 1, "", PAGESIZE-21, 0, 39);
mem_copy(2, 4, "shared", 2*PAGESIZE-20, 0, 40);
mem_copy(2, 4, "shared", 2*PAGESIZE-21, 0, 39);


mem_copy(1, 1, "", PAGESIZE-50, PAGESIZE-20, 40);


mem_copy(1, 1, "", PAGESIZE-20, PAGESIZE-50, 40);


mem_copy(1, 1, "", PAGESIZE-30, PAGESIZE-20, 40);
mem_copy(1, 1, "", PAGESIZE-20, PAGESIZE-30, 40);
mem_copy(1, 1, "", PAGESIZE-20, PAGESIZE-20, 40);


mem_copy(1, "", "", PAGESIZE-20, 0, 0xFFFFF000);


mem_copy(1, 1, "", PAGESIZE-0x1000, PAGESIZE-20, 0xFFFFFF00);

