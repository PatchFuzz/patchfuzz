PAGES = 10;
memory = new WebAssembly.Memory({initial: PAGES});
buffer = memory.buffer;
memory.grow(0);
WebAssembly.validate(buffer);
