






function AsmModule(stdlib, foreign, heap) {
    "use asm";
    var abs = stdlib.Math.abs;
    function testOp(av) {
        av = +av;
        return +abs(av);
    };
    return {testOp : testOp};
}


var asmModule = AsmModule({Math:Math},{}, new ArrayBuffer(1<<20));


WScript.Echo(asmModule.testOp(-123.334) === 123.334);
WScript.Echo(isNaN(asmModule.testOp(NaN)));
WScript.Echo(isNaN(asmModule.testOp(-NaN)));
WScript.Echo(asmModule.testOp(Infinity) === Infinity);
WScript.Echo(asmModule.testOp(-Infinity) === Infinity);
WScript.Echo(asmModule.testOp(0.0) === 0.0);
WScript.Echo(asmModule.testOp(-0.0) === 0.0);

