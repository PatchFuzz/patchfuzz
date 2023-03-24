while (0 < 6) {
    const v4 = 7982467 >> 6;
    const o5 = {
        "maxByteLength": v4,
    };
    const v7 = new SharedArrayBuffer(371, o5);
}
// CRASH INFO
// ==========
// TERMSIG: 6
// STDERR:
// mprotect failed: Cannot allocate memory
// SHOULD NEVER BE REACHED
// /home/data/WebKit/Source/JavaScriptCore/runtime/ArrayBuffer.cpp(113) : RefPtr<JSC::BufferMemoryHandle> JSC::tryAllocateResizableMemory(JSC::VM *, size_t, size_t)
// STDOUT:
// 
// ARGS: /home/data/WebKit/fuzzilli/Debug/bin/jsc --validateOptions=true --thresholdForJITSoon=10 --thresholdForJITAfterWarmUp=10 --thresholdForOptimizeAfterWarmUp=100 --thresholdForOptimizeAfterLongWarmUp=100 --thresholdForOptimizeSoon=100 --thresholdForFTLOptimizeAfterWarmUp=1000 --thresholdForFTLOptimizeSoon=1000 --validateBCE=true --reprl
// EXECUTION TIME: 1115ms
gc();
