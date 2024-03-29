"use strict"


function opaqueGetByVal1(array, index) {
    return array[index];
}
noInline(opaqueGetByVal1);

function testAccessInBounds() {
    const target = new Array(100);

    
    for (let i = 0; i < 1e4; ++i) {
        const value = opaqueGetByVal1(target, i % 100);
        if (value !== undefined)
            throw "opaqueGetByVal1() case 1 failed for i = " + i + " value = " + value;
    }

    Object.prototype[42] = "Uh!";

    for (let i = 0; i < 1e4; ++i) {
        const index = i % 100;
        const value = opaqueGetByVal1(target, index);
        if (index == 42) {
            if (value !== "Uh!")
                throw "opaqueGetByVal1() case 2 failed on 42, value = " + value;
        } else if (value !== undefined)
            throw "opaqueGetByVal1() case 2 failed for i = " + i + " value = " + value;
    }
}
testAccessInBounds();


function opaqueGetByVal2(array, index) {
    return array[index];
}
noInline(opaqueGetByVal2);

function testAccessOnEmpty() {
    const target = new Array();

    for (let i = 0; i < 1e4; ++i) {
        const index = i % 100;
        const value = opaqueGetByVal2(target, index);
        if (index == 42) {
            if (value !== "Uh!")
                throw "opaqueGetByVal2() case 2 failed on 42, value = " + value;
        } else if (value !== undefined)
            throw "opaqueGetByVal2() case 2 failed for i = " + i + " value = " + value;
    }
}
testAccessOnEmpty();
