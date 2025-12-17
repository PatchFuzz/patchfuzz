loadRelativeToScript("load-mod.js");


wasmFailValidateBinary(loadMod("wasm-gc-limits-r1M1-t1.wasm"), /too many/);
