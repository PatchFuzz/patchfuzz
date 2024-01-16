"use strict"


function opaqueGetByVal1(array, index) {
    return array[index];
}
noInline(opaqueGetByVal1);


const NotIndexInteger = 0xFFFFFFFF;

function testUninitializedArray() {
    const target = new Array(100);

    
    for (let i = 0; i < 1e4; ++i) {
        const value = opaqueGetByVal1(target, i);
        if (value !== undefined)
            throw "opaqueGetByVal1() case 1 failed for i = " + i + " value = " + value;
    }

    Array.prototype[NotIndexInteger] = "Uh!";

    for (let i = 0; i < 1e4; ++i) {
        const value = opaqueGetByVal1(target, i);
        if (value !== undefined)
            throw "opaqueGetByVal1() case 2 failed for i = " + i + " value = " + value;
    }
    const prototypeValue = opaqueGetByVal1(target, NotIndexInteger)
    if (prototypeValue !== "Uh!")
        throw "prototypeValue value = " + value;

}
testUninitializedArray();


function opaqueGetByVal2(array, index) {
    return array[index];
}
noInline(opaqueGetByVal2);

function testAccessOnEmpty() {
    const target = new Array();

    for (let i = 0; i < 1e4; ++i) {
        const value = opaqueGetByVal2(target, i);
        if (value !== undefined)
            throw "opaqueGetByVal2() case 1 failed for i = " + i + " value = " + value;
    }
    const prototypeValue = opaqueGetByVal2(target, NotIndexInteger)
    if (prototypeValue !== "Uh!")
        throw "prototypeValue value = " + value;
}
testAccessOnEmpty();
