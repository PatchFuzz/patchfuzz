

;

const v2vSig = {args:[], ret:VoidCode};
const v2vSigSection = sigSection([v2vSig]);

function checkInvalid(binary, errorMessage) {
    print(() => new WebAssembly.Module(binary),
        WebAssembly.CompileError,
        errorMessage);
}



const invalidRefNullHeapBody = moduleWithSections([
    v2vSigSection,
    declSection([0]),
    bodySection([
        funcBody({locals:[], body:[
            RefNullCode,
            OptRefCode,
            AnyFuncCode,
            DropCode,
        ]})
    ])
]);
checkInvalid(invalidRefNullHeapBody, /invalid heap type/);

const invalidRefNullHeapElem = moduleWithSections([
    generalElemSection([
        {
            flag: PassiveElemExpr,
            typeCode: AnyFuncCode,
            elems: [
                [RefNullCode, OptRefCode, AnyFuncCode, EndCode]
            ]
        }
    ])
]);
checkInvalid(invalidRefNullHeapElem, /invalid heap type/);

const invalidRefNullHeapGlobal = moduleWithSections([
    globalSection([
        {
            valType: AnyFuncCode,
            flag: 0,
            initExpr: [RefNullCode, OptRefCode, AnyFuncCode, EndCode]
        }
    ])
]);
checkInvalid(invalidRefNullHeapGlobal, /invalid heap type/);
