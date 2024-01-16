

oomTest(() => {
    const module = wasmIntrinsicI8VecMul();
    WebAssembly.Module.imports(module);
});
