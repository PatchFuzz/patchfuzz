


opts = getJitCompilerOptions();
if (opts['ion.enable'] || opts['baseline.enable'])
  quit();

const { startProfiling, endProfiling, assertEqPreciseStacks, isSingleStepProfilingEnabled } = WasmHelpers;

let e = wasmEvalText(`(module
    (global $g (mut externref) (ref.null extern))
    (func (export "set") (param externref) local.get 0 global.set $g)
)`).exports;

let obj = { field: null };




gczeal(4, 1);
e.set(obj);
e.set(null);
gczeal(0);

if (!isSingleStepProfilingEnabled) {
    quit(0);
}

enableGeckoProfiling();
startProfiling();
gczeal(4, 1);
e.set(obj);
gczeal(0);
assertEqPreciseStacks(
    endProfiling(),
    [
        
        ['', '!>', '0,!>', '<,0,!>', 'GC postbarrier,0,!>',
         '<,0,!>', '0,!>', '!>', ''],

        
        ['', '!>', '0,!>', '!>', ''],
    ]);

startProfiling();
gczeal(4, 1);
e.set(null);
gczeal(0);


assertEqPreciseStacks(
    endProfiling(),
    [
        
        ['', '!>', '0,!>', '', '0,!>', '<,0,!>', 'GC postbarrier,0,!>',
         '<,0,!>', '0,!>', '!>', ''],

        
        ['', '!>', '0,!>', '', '0,!>', '!>', ''],
    ]);

