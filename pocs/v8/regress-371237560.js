function boom() {
  
  try {
    f2();
  } catch(e4) {
  }
  
  const options = {
    "initial": 1,
  };
  
  Object.defineProperty(options, "shared", { "get": () => {} });
  if (typeof WebAssembly === "object") {
    new WebAssembly.Memory(options);
  }
}
performance.measureMemory();
Object.defineProperty(Object.prototype, "then", {"get": boom });
