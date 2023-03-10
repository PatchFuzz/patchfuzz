;

const wasmEval = (code, imports) => new WebAssembly.Instance(new WebAssembly.Module(code), imports).exports;
const v2vSig = {args:[], ret:VoidCode};
const v2vSigSection = sigSection([v2vSig]);






var jco = getJitCompilerOptions();
if (jco["ion.enable"] && jco["baseline.enable"] && jco["baseline.warmup.trigger"] > 0 && jco["ion.warmup.trigger"] > 10) {
    var manyBlocks = [];
    for (var i = 0; i < 20000; i++)
        manyBlocks.push(BlockCode, VoidCode);
    for (var i = 0; i < 20000; i++)
        manyBlocks.push(EndCode);
    wasmEval(moduleWithSections([v2vSigSection, declSection([0]), bodySection([funcBody({locals:[], body:manyBlocks})])]));
}
