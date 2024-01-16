



var memtypes = wasmMemory64Enabled() ? ['i32', 'i64'] : [''];

function makeMemoryDesc(memtype, d) {
    if (memtype != '') {
        d.index = memtype;
    }
    return d;
}

function Zero(memtype) {
    return memtype == 'i64' ? 0n : 0;
}




for ( let memtype of memtypes ) {
    let mem1 = new WebAssembly.Memory(makeMemoryDesc(memtype, {initial: 2, maximum: 4}));
    assertErrorMessage(() => serialize(mem1),
		       TypeError,
		       /unsupported type for structured data/);
    assertErrorMessage(() => serialize(mem1, [mem1]),
		       TypeError,
		       /invalid transferable array for structured clone/);
}




for ( let memtype of memtypes ) {
    let ptrtype = memtype == 'i64' ? memtype : 'i32';
    let mem1 = new WebAssembly.Memory(makeMemoryDesc(memtype, {initial: 2, maximum: 4, shared: true}));
    let buf1 = mem1.buffer;

    

    let mem2 = deserialize(serialize(mem1, [], {SharedArrayBuffer: 'allow'}), {SharedArrayBuffer: 'allow'});
    assertEq(mem2 instanceof WebAssembly.Memory, true);
    let buf2 = mem2.buffer;
    assertEq(buf2 instanceof SharedArrayBuffer, true);

    assertEq(buf1 !== buf2, true);
    assertEq(buf1.byteLength, buf2.byteLength);
    if (memtype != '' && mem2.type) {
        assertEq(mem2.type().index, memtype);
    }

    

    let v1 = new Int32Array(buf1);
    let v2 = new Int32Array(buf2);

    v1[37] = 0x12345678;
    assertEq(v2[37], 0x12345678);

    

    let index = 2*65536 + 200;
    let access = wasmEvalText(`(module
				(memory (import "" "memory") ${memtype} 2 4 shared)
				(func (export "l") (result ${ptrtype})
				 (${ptrtype}.load (${ptrtype}.const ${index}))))`,
			      {"": {memory: mem2}}).exports.l;

    
    assertErrorMessage(access, WebAssembly.RuntimeError, /out of bounds/);

    
    wasmEvalText(`(module
		   (memory (import "" "memory") ${memtype} 2 4 shared)
		   (func (export "g") (drop (memory.grow (${ptrtype}.const 1)))))`,
		 {"": {memory: mem1}}).exports.g();

    
    assertEq(access(), Zero(memtype));
}



for ( let memtype of memtypes ) {
    let mem1 = new WebAssembly.Memory(makeMemoryDesc(memtype, {initial: 2, maximum: 4, shared: true}));
    assertErrorMessage(() => serialize(mem1, [mem1]),
		       TypeError,
		       /Shared memory objects must not be in the transfer list/);

}





for ( let memtype of memtypes ) {
    let mem = new WebAssembly.Memory(makeMemoryDesc(memtype, {initial: 2, maximum: 4, shared: true}));
    let buf = mem.buffer;
    let clonedbuf = serialize(buf, [], {SharedArrayBuffer: 'allow'});
    mem.grow(1);
    let buf2 = deserialize(clonedbuf, {SharedArrayBuffer: 'allow'});
    assertEq(buf.byteLength, buf2.byteLength);
}
