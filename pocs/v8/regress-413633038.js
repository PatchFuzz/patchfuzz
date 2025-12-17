function c0() {
  return %WasmArray();
}

class c1 extends c0 {
  h = 1;
}

print(() => new c1(), TypeError, /WebAssembly objects are opaque/);
