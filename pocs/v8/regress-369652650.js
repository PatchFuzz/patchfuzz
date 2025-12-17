const generated_module = %WasmGenerateRandomModule();
if (typeof WebAssembly == "object") {
  print(generated_module, WebAssembly.Module);
} else {
  
  print(generated_module, undefined);
}
