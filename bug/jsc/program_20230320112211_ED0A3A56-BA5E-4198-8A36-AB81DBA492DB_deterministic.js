const v2 = new Int16Array(59925);
function f3(a4, a5, a6, a7) {
    const o10 = {
        "maxByteLength": 786701,
    };
    const v12 = new ArrayBuffer(32, o10);
    return a6;
}
v2.forEach(f3);
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
// EXECUTION TIME: 1063ms
gc();
