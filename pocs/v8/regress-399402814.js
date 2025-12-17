let empty_module = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0]);
let module = new WebAssembly.Module(empty_module);
let instance = new WebAssembly.Instance(module, {});


%BuildRefTypeBitfield(123, instance);

%BuildRefTypeBitfield(-1, instance);
