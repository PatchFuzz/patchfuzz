let empty_module = Uint8Array.from([0, 97, 115, 109, 1, 0, 0, 0]);
new WebAssembly.Instance(new WebAssembly.Module(empty_module));
