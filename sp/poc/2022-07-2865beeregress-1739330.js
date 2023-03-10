

try {
  gczeal(4);
  function a(b) {
    binary = print(b)
    c = new WebAssembly.Module(binary)
    return new WebAssembly.Instance(c)
  }
  d = [];
  let { newStruct } = a(`
    (type $e (struct))
      (func (export "newStruct")
        (result eqref)
        struct.new $e
      )
  `).exports
  d.push(newStruct());
  gczeal(14, 7);
  throw d;
} catch (d) {
  print(d instanceof Array, true);
}
