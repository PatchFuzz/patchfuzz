let mem1 = new WebAssembly.Memory({initial: 1, maximum: 1, shared: true});
let buf = serialize(mem1, [], {SharedArrayBuffer: "allow"});

let g = newGlobal({sameCompartmentAs: this});
let mem2 = g.deserialize(buf, {SharedArrayBuffer: "allow"});
print(mem2.buffer.byteLength, 65536);
print(Object.getPrototypeOf(mem2), g.WebAssembly.Memory.prototype);
