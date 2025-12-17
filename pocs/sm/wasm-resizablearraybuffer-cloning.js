let mem = new WebAssembly.Memory({initial: 2, maximum: 4, shared: true});
let buf = mem.toResizableBuffer();
let clonedbuf = serialize(buf, [], {SharedArrayBuffer: 'allow'});
mem.grow(1);
let buf2 = deserialize(clonedbuf, {SharedArrayBuffer: 'allow'});
print(buf.byteLength, buf2.byteLength);
