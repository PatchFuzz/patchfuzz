loadRelativeToScript("load-mod.js");


wasmFailValidateBinary(loadMod("wasm-gc-limits-s10K1.wasm"), /too many/);
{
  let {makeLargeStructDefault, makeLargeStruct} = wasmEvalBinary(loadMod("wasm-gc-limits-s10K.wasm")).exports;
  let largeStructDefault = makeLargeStructDefault();
  let largeStruct = makeLargeStruct();
}
