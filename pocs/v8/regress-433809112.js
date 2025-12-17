function module() {
  "use asm";
  function f() {}
  return {f: f};
}
Object.defineProperty(WebAssembly.Instance.prototype, '__single_function__', {
  get: () => {
    throw null;
  }
});
module();
