let compileOptions = new Proxy([], {get: () => d8.terminate()});
WebAssembly.compile(new Uint8Array([0]), compileOptions);
