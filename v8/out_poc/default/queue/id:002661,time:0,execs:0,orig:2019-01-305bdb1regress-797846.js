






const builder = new WasmModuleBuilder();
builder.addFunction('test', kSig_v_v).addBody([]);

const buffer = builder.toBuffer();
print(
    WebAssembly.compile(buffer), _ => Realm.createAllowCrossRealmAccess());
