;

const { extractStackFrameFunction } = WasmHelpers;

const { Module, RuntimeError, CompileError } = WebAssembly;

const magicError = /failed to match magic number/;
const unknownSection = /expected custom section/;

function sectionError(section) {
    return RegExp(`failed to start ${section} section`);
}

function versionError(actual) {
    var expect = encodingVersion;
    var str = `binary version 0x${actual.toString(16)} does not match expected version 0x${expect.toString(16)}`;
    return RegExp(str);
}

const U32MAX_LEB = [255, 255, 255, 255, 15];

const wasmEval = (code, imports) => new WebAssembly.Instance(new Module(code), imports).exports;

print(() => wasmEval(toU8([])), CompileError, magicError);
print(() => wasmEval(toU8([42])), CompileError, magicError);
print(() => wasmEval(toU8([magic0, magic1, magic2])), CompileError, magicError);
print(() => wasmEval(toU8([1,2,3,4])), CompileError, magicError);
print(() => wasmEval(toU8([magic0, magic1, magic2, magic3])), CompileError, versionError(0x6d736100));
print(() => wasmEval(toU8([magic0, magic1, magic2, magic3, 1])), CompileError, versionError(0x6d736100));
print(() => wasmEval(toU8([magic0, magic1, magic2, magic3, ver0])), CompileError, versionError(0x6d736100));
print(() => wasmEval(toU8([magic0, magic1, magic2, magic3, ver0, ver1, ver2])), CompileError, versionError(0x6d736100));

var o = wasmEval(toU8(moduleHeaderThen()));
print(Object.getOwnPropertyNames(o).length, 0);


if (globalThis.SharedArrayBuffer) {
  print(() => wasmEval(toSharedU8(moduleHeaderThen())), TypeError, /first argument must be an ArrayBuffer/);
}


print(() => wasmEval(toU8(moduleHeaderThen(typeId))), CompileError, sectionError("type"));
print(() => wasmEval(toU8(moduleHeaderThen(importId))), CompileError, sectionError("import"));
print(() => wasmEval(toU8(moduleHeaderThen(functionId))), CompileError, sectionError("function"));
print(() => wasmEval(toU8(moduleHeaderThen(tableId))), CompileError, sectionError("table"));
print(() => wasmEval(toU8(moduleHeaderThen(memoryId))), CompileError, sectionError("memory"));
print(() => wasmEval(toU8(moduleHeaderThen(globalId))), CompileError, sectionError("global"));
print(() => wasmEval(toU8(moduleHeaderThen(exportId))), CompileError, sectionError("export"));
print(() => wasmEval(toU8(moduleHeaderThen(startId))), CompileError, sectionError("start"));
print(() => wasmEval(toU8(moduleHeaderThen(elemId))), CompileError, sectionError("elem"));
print(() => wasmEval(toU8(moduleHeaderThen(codeId))), CompileError, sectionError("code"));
print(() => wasmEval(toU8(moduleHeaderThen(dataId))), CompileError, sectionError("data"));


print(() => wasmEval(toU8(moduleHeaderThen(37))), CompileError, unknownSection);
print(() => wasmEval(toU8(moduleHeaderThen(37, 0))), CompileError, unknownSection);
print(() => wasmEval(toU8(moduleHeaderThen(37, 1, 0))), CompileError, unknownSection);


print(() => wasmEval(toU8(moduleHeaderThen(0))), CompileError, sectionError("custom"));  
print(() => wasmEval(toU8(moduleHeaderThen(0, 0))), CompileError, sectionError("custom"));  
print(() => wasmEval(toU8(moduleHeaderThen(0, 0, 0))), CompileError, sectionError("custom"));  
print(() => wasmEval(toU8(moduleHeaderThen(0, 1, 1))), CompileError, sectionError("custom"));  
print(() => wasmEval(toU8(moduleHeaderThen(0, 1, 1, 65))), CompileError, sectionError("custom"));  
print(() => wasmEval(toU8(moduleHeaderThen(0, 1, 0, 0))), CompileError, sectionError("custom"));  
wasmEval(toU8(moduleHeaderThen(0, 1, 0)));  
wasmEval(toU8(moduleHeaderThen(0, 1, 0,  0, 1, 0)));  
wasmEval(toU8(moduleHeaderThen(0, 2, 1, 65)));  

const v2vSig = {args:[], ret:VoidCode};
const v2vSigSection = sigSection([v2vSig]);
const i2vSig = {args:[I32Code], ret:VoidCode};
const v2vBody = funcBody({locals:[], body:[]});

print(() => wasmEval(moduleWithSections([ {name: typeId, body: U32MAX_LEB } ])), CompileError, /too many types/);
print(() => wasmEval(moduleWithSections([ {name: typeId, body: [1, 0], } ])), CompileError, /expected type form/);
print(() => wasmEval(moduleWithSections([ {name: typeId, body: [1, FuncCode, ...U32MAX_LEB], } ])), CompileError, /too many arguments in signature/);

print(() => wasmEval(moduleWithSections([{name: typeId, body: [1]}])), CompileError);
print(() => wasmEval(moduleWithSections([{name: typeId, body: [1, 1, 0]}])), CompileError);

wasmEval(moduleWithSections([sigSection([])]));
wasmEval(moduleWithSections([v2vSigSection]));
wasmEval(moduleWithSections([sigSection([i2vSig])]));
wasmEval(moduleWithSections([sigSection([v2vSig, i2vSig])]));

print(() => wasmEval(moduleWithSections([sigSection([{args:[], ret:33}])])), CompileError, /bad type/);
print(() => wasmEval(moduleWithSections([sigSection([{args:[33], ret:VoidCode}])])), CompileError, /bad type/);

print(() => wasmEval(moduleWithSections([sigSection([]), declSection([0])])), CompileError, /signature index out of range/);
print(() => wasmEval(moduleWithSections([v2vSigSection, declSection([1])])), CompileError, /signature index out of range/);
print(() => wasmEval(moduleWithSections([v2vSigSection, declSection([0])])), CompileError, /expected code section/);
wasmEval(moduleWithSections([v2vSigSection, declSection([0]), bodySection([v2vBody])]));

print(() => wasmEval(moduleWithSections([v2vSigSection, declSection([0]), bodySection([v2vBody.concat(v2vBody)])])), CompileError, /byte size mismatch in code section/);

print(() => wasmEval(moduleWithSections([v2vSigSection, {name: importId, body:[]}])), CompileError);
print(() => wasmEval(moduleWithSections([importSection([{module:"a", item:"b", funcTypeIndex:0}])])), CompileError, /signature index out of range/);
print(() => wasmEval(moduleWithSections([v2vSigSection, importSection([{module:"a", item:"b", funcTypeIndex:1}])])), CompileError, /signature index out of range/);
wasmEval(moduleWithSections([v2vSigSection, importSection([])]));
wasmEval(moduleWithSections([v2vSigSection, importSection([{module:"a", item:"", funcTypeIndex:0}])]), {a:{"":()=>{}}});

wasmEval(moduleWithSections([
    v2vSigSection,
    importSection([{module:"a", item:"", funcTypeIndex:0}]),
    declSection([0]),
    bodySection([v2vBody])
]), {a:{"":()=>{}}});

print(() => wasmEval(moduleWithSections([ dataSection([{offset:1, elems:[]}]) ])), CompileError, /data segment requires a memory section/);

wasmEval(moduleWithSections([defaultTableSection(0)]));
wasmEval(moduleWithSections([elemSection([])]));
wasmEval(moduleWithSections([defaultTableSection(0), elemSection([])]));
wasmEval(moduleWithSections([defaultTableSection(1), elemSection([{offset:1, elems:[]}])]));
print(() => wasmEval(moduleWithSections([defaultTableSection(1), elemSection([{offset:0, elems:[0]}])])), CompileError, /element index out of range/);
wasmEval(moduleWithSections([v2vSigSection, declSection([0]), defaultTableSection(1), elemSection([{offset:0, elems:[0]}]), bodySection([v2vBody])]));
wasmEval(moduleWithSections([v2vSigSection, declSection([0]), defaultTableSection(2), elemSection([{offset:0, elems:[0,0]}]), bodySection([v2vBody])]));
print(() => wasmEval(moduleWithSections([v2vSigSection, declSection([0]), defaultTableSection(2), elemSection([{offset:0, elems:[0,1]}]), bodySection([v2vBody])])), CompileError, /element index out of range/);
wasmEval(moduleWithSections([v2vSigSection, declSection([0,0,0]), defaultTableSection(4), elemSection([{offset:0, elems:[0,1,0,2]}]), bodySection([v2vBody, v2vBody, v2vBody])]));
wasmEval(moduleWithSections([sigSection([v2vSig,i2vSig]), declSection([0,0,1]), defaultTableSection(3), elemSection([{offset:0,elems:[0,1,2]}]), bodySection([v2vBody, v2vBody, v2vBody])]));

wasmEval(moduleWithSections([tableSection0()]));

wasmEval(moduleWithSections([memorySection(0)]));

function memorySection2() {
    var body = [];
    body.push(...varU32(2));           
    body.push(...varU32(0x0));
    body.push(...varU32(0));
    body.push(...varU32(0x0));
    body.push(...varU32(0));
    return { name: memoryId, body };
}

wasmEval(moduleWithSections([memorySection0()]));
wasmEval(moduleWithSections([memorySection2()]));


const bodyMismatch = /(function body length mismatch)|(operators remaining after end of function)/;
print(() => wasmEval(moduleWithSections([v2vSigSection, declSection([0]), bodySection([funcBody({locals:[], body:[EndCode]})])])), CompileError, bodyMismatch);
print(() => wasmEval(moduleWithSections([v2vSigSection, declSection([0]), bodySection([funcBody({locals:[], body:[UnreachableCode,EndCode]})])])), CompileError, bodyMismatch);
print(() => wasmEval(moduleWithSections([v2vSigSection, declSection([0]), bodySection([funcBody({locals:[], body:[EndCode,UnreachableCode]})])])), CompileError, bodyMismatch);


var tooBigNameSection = {
    name: userDefinedId,
    body: [...string(nameName), ...varU32(Math.pow(2, 31))] 
};
wasmEval(moduleWithSections([tooBigNameSection]));


print(() => wasmEval(toU8([0,97,115,109,1,0,0,0,0,3,2,254,255,])), CompileError, /failed to start custom section/);


var customDefSec = customSection("wee", 42, 13);
var declSec = declSection([0]);
var bodySec = bodySection([v2vBody]);
var nameSec = nameSection([funcNameSubsection([{name:'hi'}])]);
wasmEval(moduleWithSections([customDefSec, v2vSigSection, declSec, bodySec]));
wasmEval(moduleWithSections([v2vSigSection, customDefSec, declSec, bodySec]));
wasmEval(moduleWithSections([v2vSigSection, declSec, customDefSec, bodySec]));
wasmEval(moduleWithSections([v2vSigSection, declSec, bodySec, customDefSec]));
wasmEval(moduleWithSections([customDefSec, customDefSec, v2vSigSection, declSec, bodySec]));
wasmEval(moduleWithSections([customDefSec, customDefSec, v2vSigSection, customDefSec, declSec, customDefSec, bodySec]));


function checkCustomSection(buf, val) {
    print(buf instanceof ArrayBuffer, true);
    print(buf.byteLength, 1);
    print(new Uint8Array(buf)[0], val);
}
var custom1 = customSection("one", 1);
var custom2 = customSection("one", 2);
var custom3 = customSection("two", 3);
var custom4 = customSection("three", 4);
var custom5 = customSection("three", 5);
var custom6 = customSection("three", 6);
var m = new Module(moduleWithSections([custom1, v2vSigSection, custom2, declSec, custom3, bodySec, custom4, nameSec, custom5, custom6]));
var arr = Module.customSections(m, "one");
print(arr.length, 2);
checkCustomSection(arr[0], 1);
checkCustomSection(arr[1], 2);
var arr = Module.customSections(m, "two");
print(arr.length, 1);
checkCustomSection(arr[0], 3);
var arr = Module.customSections(m, "three");
print(arr.length, 3);
checkCustomSection(arr[0], 4);
checkCustomSection(arr[1], 5);
checkCustomSection(arr[2], 6);
var arr = Module.customSections(m, "name");
print(arr.length, 1);
print(arr[0].byteLength, nameSec.body.length - 5 );


const nameWarning = /validated with warning.*'name' custom section/;
const okNameSec = nameSection([]);
print(() => wasmEval(moduleWithSections([v2vSigSection, declSec, bodySec, okNameSec])));
const badNameSec1 = nameSection([]);
badNameSec1.body.push(1);
print(() => wasmEval(moduleWithSections([v2vSigSection, declSec, bodySec, badNameSec1])), nameWarning);
const badNameSec2 = nameSection([funcNameSubsection([{name:'blah'}])]);
badNameSec2.body.push(100, 20, 42, 83);
print(() => wasmEval(moduleWithSections([v2vSigSection, declSec, bodySec, badNameSec2])), nameWarning);
const badNameSec3 = nameSection([funcNameSubsection([{name:'blah'}])]);
badNameSec3.body.pop();
print(() => wasmEval(moduleWithSections([v2vSigSection, declSec, bodySec, badNameSec3])), nameWarning);
print(() => wasmEval(moduleWithSections([nameSection([moduleNameSubsection('hi')])])));
print(() => wasmEval(moduleWithSections([nameSection([moduleNameSubsection('hi'), moduleNameSubsection('boo')])])), nameWarning);

print(() => wasmEval(moduleWithSections([nameSection([moduleNameSubsection('hi'), [4, 0]])])));
print(() => wasmEval(moduleWithSections([nameSection([moduleNameSubsection('hi'), [4, 1]])])), nameWarning);
print(() => wasmEval(moduleWithSections([nameSection([moduleNameSubsection('hi'), [4, 1, 42]])])));


print(() => wasmEval(moduleWithSections([
    v2vSigSection,
    declSection([0]),
    exportSection([{funcIndex: 0, name: "f"}]),
    bodySection([funcBody({locals:[], body:[UnreachableCode]})]),
    nameSection([moduleNameSubsection('hi')])])
).f(), RuntimeError, /unreachable/);


for (var bad of [0xff, 1, 0x3f])
    print(() => wasmEval(moduleWithSections([sigSection([v2vSig]), declSection([0]), bodySection([funcBody({locals:[], body:[BlockCode, bad, EndCode]})])])), CompileError, /(invalid .*block type)|(unknown type)/);

const multiValueModule = moduleWithSections([sigSection([v2vSig]), declSection([0]), bodySection([funcBody({locals:[], body:[BlockCode, 0, EndCode]})])]);

print(WebAssembly.validate(multiValueModule), true);




for (let op of undefinedOpcodes) {
    let binary = moduleWithSections([v2vSigSection, declSection([0]), bodySection([funcBody({locals:[], body:[op]})])]);
    print(() => wasmEval(binary), CompileError, /((unrecognized|Unknown) opcode)|(tail calls support is not enabled)|(Exceptions support is not enabled)|(Unexpected EOF)/);
    print(WebAssembly.validate(binary), false);
}



function checkIllegalPrefixed(prefix, opcode) {
    let binary = moduleWithSections([v2vSigSection,
                                     declSection([0]),
                                     bodySection([funcBody({locals:[],
                                                            body:[prefix, ...varU32(opcode)]})])]);
    print(() => wasmEval(binary), CompileError, /((unrecognized|Unknown) opcode)|(Unknown.*subopcode)|(Unexpected EOF)|(SIMD support is not enabled)|(invalid lane index)/);
    print(WebAssembly.validate(binary), false);
}



let reservedGc = {
    
    0x00: true, 0x01: true, 0x02: true, 0x03: true, 0x04: true, 0x05: true,
    
    0x06: true, 0x07: true, 0x08: true, 0x09: true, 0x0a: true, 0x0b: true,
    0x0c: true, 0x0d: true, 0x0e: true, 0x0f: true, 0x10: true, 0x11: true,
    0x12: true, 0x13: true,
    
    0x14: true, 0x15: true, 0x16: true, 0x17: true, 0x18: true, 0x19: true,
    0x1a: true, 0x1b: true,
    
    0x1c: true, 0x1d: true, 0x1e: true,
};
for (let i = 0; i < 256; i++) {
    if (reservedGc.hasOwnProperty(i)) {
        continue;
    }
    checkIllegalPrefixed(GcPrefix, i);
}








for (let i = 0x4; i < 0x10; i++)
    checkIllegalPrefixed(ThreadPrefix, i);

for (let i = 0x4f; i < 0x100; i++)
    checkIllegalPrefixed(ThreadPrefix, i);



var reservedMisc =
    { 
      0x00: true, 0x01: true, 0x02: true, 0x03: true, 0x04: true, 0x05: true, 0x06: true, 0x07: true,
      
      0x08: true, 0x09: true, 0x0a: true, 0x0b: true, 0x0c: true, 0x0d: true, 0x0e: true,
      
      0x0f: true, 0x10: true, 0x11: true, 0x12: true,
      
      0x50: true, 0x51: true, 0x52: true, 0x53: true };

for (let i = 0; i < 256; i++) {
    if (reservedMisc.hasOwnProperty(i))
        continue;
    checkIllegalPrefixed(MiscPrefix, i);
}




if (!wasmSimdEnabled()) {
    for (let i = 0; i < 0x130; i++) {
        checkIllegalPrefixed(SimdPrefix, i);
    }
} else {
    let reservedSimd = [
        0x9a, 0xa2, 0xa5, 0xa6, 0xaf, 0xb0, 0xb2, 0xb3, 0xb4, 0xbb,
        0xc2, 0xc5, 0xc6, 0xcf, 0xd0, 0xd2, 0xd3, 0xd4, 0xe2, 0xee,
        0x115, 0x116, 0x117,
        0x118, 0x119, 0x11a, 0x11b, 0x11c, 0x11d, 0x11e, 0x11f,
        0x120, 0x121, 0x122, 0x123, 0x124, 0x125, 0x126, 0x127,
        0x128, 0x129, 0x12a, 0x12b, 0x12c, 0x12d, 0x12e, 0x12f,
    ];
    for (let i of reservedSimd) {
        checkIllegalPrefixed(SimdPrefix, i);
    }
}


for (let i = 0; i < 256; i++)
    checkIllegalPrefixed(MozPrefix, i);

for (let prefix of [ThreadPrefix, MiscPrefix, SimdPrefix, MozPrefix]) {
    
    
    let binary = moduleWithSections([v2vSigSection, declSection([0]), bodySection([funcBody({locals:[], body:[prefix]}, false)])]);
    print(() => wasmEval(binary), CompileError, /(unable to read opcode)|(Unexpected EOF)|(Unknown opcode)/);
    print(WebAssembly.validate(binary), false);
}


function runStackTraceTest(moduleName, funcNames, expectedName) {
    var sections = [
        sigSection([v2vSig]),
        importSection([{module:"env", item:"callback", funcTypeIndex:0}]),
        declSection([0]),
        exportSection([{funcIndex:1, name: "run"}]),
        bodySection([funcBody({locals: [], body: [CallCode, varU32(0)]})]),
        customSection("whoa"),
        customSection("wee", 42),
    ];
    if (moduleName || funcNames) {
        var subsections = [];
        if (moduleName)
            subsections.push(moduleNameSubsection(moduleName));
        if (funcNames)
            subsections.push(funcNameSubsection(funcNames));
        sections.push(nameSection(subsections));
    }
    sections.push(customSection("yay", 13));

    var result = "";
    var callback = () => {
        result = extractStackFrameFunction(new Error().stack.split('\n')[1]);
    };
    wasmEval(moduleWithSections(sections), {"env": { callback }}).run();
    print(result, expectedName);
};

runStackTraceTest(null, null, 'wasm-function[1]');
runStackTraceTest(null, [{name:'blah'}, {name:'test'}], 'test');
runStackTraceTest(null, [{name:'test', index:1}], 'test');
runStackTraceTest(null, [{name:'blah'}, {name:'test', locals: [{name: 'var1'}, {name: 'var2'}]}], 'test');
runStackTraceTest(null, [{name:'blah'}, {name:'test', locals: [{name: 'var1'}, {name: 'var2'}]}], 'test');
runStackTraceTest(null, [{name:'blah'}, {name:'test1'}], 'test1');
runStackTraceTest(null, [{name:'blah'}, {name:'test☃'}], 'test☃');
runStackTraceTest(null, [{name:'blah'}, {name:'te\xE0\xFF'}], 'te\xE0\xFF');
runStackTraceTest(null, [{name:'blah'}], 'wasm-function[1]');
runStackTraceTest(null, [], 'wasm-function[1]');
runStackTraceTest("", [{name:'blah'}, {name:'test'}], 'test');
runStackTraceTest("a", [{name:'blah'}, {name:'test'}], 'a.test');

runStackTraceTest(null, [{name:'blah'}, {name:'test', index: 2}], 'wasm-function[1]'); 
runStackTraceTest(null, [{name:'blah'}, {name:'test', index: 100000}], 'wasm-function[1]'); 
runStackTraceTest(null, [{name:'blah'}, {name:'test', nameLen: 100}], 'wasm-function[1]'); 
runStackTraceTest(null, [{name:'blah'}, {name:''}], 'wasm-function[1]'); 



enableGeckoProfiling();
disableGeckoProfiling();

function testValidNameSectionWithProfiling() {
    enableGeckoProfiling();
    wasmEval(moduleWithSections([v2vSigSection, declSec, bodySec, nameSec]));
    disableGeckoProfiling();
}
testValidNameSectionWithProfiling();


wasmEval(moduleWithSections([
    v2vSigSection,
    declSection([0]),
    memorySection(0),
    bodySection([
        funcBody({locals: [], body: [
            I32ConstCode, 0x00, 
            I32Load,
                0x81, 0x00, 
                0x00, 
            DropCode,
        ]}),
    ]),
]));
