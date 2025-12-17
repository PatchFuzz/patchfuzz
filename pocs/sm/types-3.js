loadRelativeToScript("load-mod.js");


wasmFailValidateBinary(loadMod("wasm-gc-limits-r1-t1M1.wasm"), /too many/);
