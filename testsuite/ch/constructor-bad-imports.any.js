




test_bad_imports((name, error, build, ...arguments) => {
  test(() => {
    const builder = new WasmModuleBuilder();
    build(builder);
    const buffer = builder.toBuffer();
    const module = new WebAssembly.Module(buffer);
    assert_throws(error, () => new WebAssembly.Instance(module, ...arguments));
  }, `new WebAssembly.Instance(module): ${name}`);
});
