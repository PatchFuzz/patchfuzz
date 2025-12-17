PAGES = 10;
memory = new WebAssembly.Memory({initial: PAGES});
buffer = memory.buffer;
buffer = new Uint8Array(buffer);
memory.grow(0);
WebAssembly.validate(buffer);
