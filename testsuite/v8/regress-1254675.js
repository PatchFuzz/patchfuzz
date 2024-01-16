





d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');




(function() {
  const builder = new WasmModuleBuilder();
    builder.addType(kSig_i_s);
    builder.addFunction(undefined, 0)
            .addBodyWithEnd([kExprUnreachable, kExprEnd]);

  assertThrows(() => builder.instantiate());
}());


(function() {
  const builder = new WasmModuleBuilder();
    builder.addType(kSig_i_i);
    builder.addFunction(undefined, 0)
           .addBodyWithEnd([kExprUnreachable, kExprEnd])
           .addLocals('v128', 1);

  assertThrows(() => builder.instantiate());
}());
