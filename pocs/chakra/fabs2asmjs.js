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


print(asmModule.testOp(-123.334) === 123.334);
print(isNaN(asmModule.testOp(NaN)));
print(isNaN(asmModule.testOp(-NaN)));
print(asmModule.testOp(Infinity) === Infinity);
print(asmModule.testOp(-Infinity) === Infinity);
print(asmModule.testOp(0.0) === 0.0);
print(asmModule.testOp(-0.0) === 0.0);

