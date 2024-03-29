



d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const exportingModuleBinary = (() => {
  const builder = new WasmModuleBuilder();
  builder.addFunction('f', kSig_i_v).addBody([kExprI32Const, 42]).exportFunc();
  return builder.toBuffer();
})();

const exportingModule = new WebAssembly.Module(exportingModuleBinary);
const exportingInstance = new WebAssembly.Instance(exportingModule);

const reExportingModuleBinary = (() => {
  const builder = new WasmModuleBuilder();
  const gIndex = builder.addImport('a', 'g', kSig_i_v);
  builder.addExport('y', gIndex);
  return builder.toBuffer();
})();

const module = new WebAssembly.Module(reExportingModuleBinary);
const imports = {
  a: {g: exportingInstance.exports.f},
};
const instance = new WebAssembly.Instance(module, imports);


assertEquals(instance.exports.y, exportingInstance.exports.f);
