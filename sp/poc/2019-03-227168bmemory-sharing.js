

const WASMPAGE = 65536;



{
    let mem = new WebAssembly.Memory({initial: 2, maximum: 4, shared: true});
    print(mem.buffer instanceof SharedArrayBuffer, true);
    print(mem.buffer.byteLength, WASMPAGE*2);
}



{
    let text = `(module
		 (memory (export "memory") 1 2 shared)
		 (func (export "l0") (result i32) (i32.load (i32.const 0))))`;
    let mod = new WebAssembly.Module(print(text));
    let ins = new WebAssembly.Instance(mod);
    let mem = ins.exports.memory;
    let buf = mem.buffer;
    print(buf instanceof SharedArrayBuffer, true);
    print(buf.byteLength, WASMPAGE);
}



{
    print(() => new WebAssembly.Memory({initial: 2, shared: true}),
		       TypeError,
		       /'shared' is true but maximum is not specified/);
}



{
    let text = `(module
		 (memory 1 shared)
		 (func (export "l0") (result i32) (i32.load (i32.const 0))))`;
    print(() => new WebAssembly.Module(print(text)),
		       WebAssembly.CompileError,
		       /maximum length required for shared memory/);
}





{
    let bin = new Uint8Array([0x00, 0x61, 0x73, 0x6d,
			      0x01, 0x00, 0x00, 0x00,
			      0x05,                   
			      0x03,                   
			      0x01,                   
			      0x02,		      
			      0x01]);		      
    print(() => new WebAssembly.Module(bin),
		       WebAssembly.CompileError,
		       /maximum length required for shared memory/);
}



{
    let text = `(module
		 (memory (import "" "memory") 1 1 shared)
		 (func (export "id") (param i32) (result i32) (local.get 0)))`;
    let mod = new WebAssembly.Module(print(text));
    let mem = new WebAssembly.Memory({initial: 1, maximum: 1, shared: true});
    let ins = new WebAssembly.Instance(mod, {"": {memory: mem}});
    print(ins.exports.id(0x12345678), 0x12345678);
}



{
    let text = `(module
		 (memory (import "" "memory") 1 1 shared)
		 (func (export "id") (param i32) (result i32) (local.get 0)))`;
    let mod = new WebAssembly.Module(print(text));
    let mem = new WebAssembly.Memory({initial: 1, maximum: 1});
    print(() => new WebAssembly.Instance(mod, {"": {memory: mem}}),
		       WebAssembly.LinkError,
		       /unshared memory but shared required/);
}



{
    let text = `(module
		 (memory (import "" "memory") 1 1)
		 (func (export "id") (param i32) (result i32) (local.get 0)))`;
    let mod = new WebAssembly.Module(print(text));
    let mem = new WebAssembly.Memory({initial: 1, maximum: 1, shared: true});
    print(() => new WebAssembly.Instance(mod, {"": {memory: mem}}),
		       WebAssembly.LinkError,
		       /shared memory but unshared required/);
}




{
    let text = `(module
		 (memory (import "" "memory") 2 4 shared)
		 (func (export "id") (param i32) (result i32) (local.get 0)))`;
    let mod = new WebAssembly.Module(print(text));

    

    
    let mem3 = new WebAssembly.Memory({initial: 1, maximum: 4, shared: true});
    print(() => new WebAssembly.Instance(mod, {"": {memory: mem3}}),
		       WebAssembly.LinkError,
		       /imported Memory with incompatible size/);

    
    let mem4 = new WebAssembly.Memory({initial: 5, maximum: 8, shared: true});
    print(() => new WebAssembly.Instance(mod, {"": {memory: mem4}}),
		       WebAssembly.LinkError,
		       /imported Memory with incompatible size/);

    
    let mem5 = new WebAssembly.Memory({initial: 2, maximum: 8, shared: true});
    print(() => new WebAssembly.Instance(mod, {"": {memory: mem5}}),
		       WebAssembly.LinkError,
		       /imported Memory with incompatible maximum size/);
}





{
    let text = `(module
		 (memory (export "memory") 2 4 shared)
		 (func (export "c") (result i32) memory.size)
		 (func (export "g") (result i32) (memory.grow (i32.const 1)))
		 (func (export "l") (param i32) (result i32) (i32.load (local.get 0)))
		 (func (export "s") (param i32) (param i32) (i32.store (local.get 0) (local.get 1))))`;
    let mod = new WebAssembly.Module(print(text));
    let ins = new WebAssembly.Instance(mod);
    let exp = ins.exports;
    let mem = exp.memory;

    let b1 = mem.buffer;
    print(exp.c(), 2);
    print(b1.byteLength, WASMPAGE*2);
    print(mem.buffer === b1, true);   
    exp.s(WASMPAGE*2-4, 0x12345678)	 
    print(exp.l(WASMPAGE*2-4), 0x12345678);
    print(() => exp.l(WASMPAGE*2), 
		       WebAssembly.RuntimeError,
		       /index out of bounds/);
    print(exp.g(), 2);
    print(b1.byteLength, WASMPAGE*2); 
    let b2 = mem.buffer;
    print(b1 !== b2, true);	         
    print(b2.byteLength, WASMPAGE*3); 
    print(exp.c(), 3);
    exp.s(WASMPAGE*3-4, 0x12344321);     
    print(exp.l(WASMPAGE*3-4), 0x12344321);
    print(() => exp.l(WASMPAGE*3), 
		       WebAssembly.RuntimeError,
		       /index out of bounds/);
    print(exp.g(), 3);
    print(b2.byteLength, WASMPAGE*3); 
    let b3 = mem.buffer;
    print(b2 !== b3, true);	         
    print(b3.byteLength, WASMPAGE*4); 
    print(exp.c(), 4);
    exp.s(WASMPAGE*4-4, 0x12121212);     
    print(exp.l(WASMPAGE*4-4), 0x12121212);
    print(() => exp.l(WASMPAGE*4), 
		       WebAssembly.RuntimeError,
		       /index out of bounds/);
    print(exp.g(), -1);
    print(exp.c(), 4);                
    let b4 = mem.buffer;
    print(b3 === b4, true);	         
    print(exp.g(), -1);               
}




{
    let mem = new WebAssembly.Memory({initial: 2, maximum: 4, shared: true});
    let buf = mem.buffer;
    print(mem.grow(1), 2);
    print(buf.byteLength, WASMPAGE*2);
    print(mem.grow(1), 3);
    print(() => mem.grow(1), RangeError, /failed to grow memory/);
}



{
    let text = `(module
		 (memory (import "" "memory") 2 4 shared)
		 (data (i32.const 0) "abcdefghijklmnopqrstuvwxyz")
		 (func (export "l") (param i32) (result i32) (i32.load8_u (local.get 0))))`;
    let mod = new WebAssembly.Module(print(text));
    let mem = new WebAssembly.Memory({initial: 2, maximum: 4, shared: true});
    let ins = new WebAssembly.Instance(mod, {"": {memory: mem}});
    let exp = ins.exports;
    print(exp.l(12), "a".charCodeAt(0) + 12);
}

