loadRelativeToScript("load-mod.js");


wasmFailValidateBinary(loadMod("wasm-gc-limits-r2-t500K1.wasm"), /too many/);
