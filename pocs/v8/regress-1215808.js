const k4GB = 4 * 1024 * 1024 * 1024;

let memory = new WebAssembly.Memory({initial: 1});
try {
  memory.grow(k4GB - 1);
} catch {}
