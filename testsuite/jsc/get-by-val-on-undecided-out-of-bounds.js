"use strict"

function opaqueGetByValKnownArray(value)
{
    let array = [];
    return array[value];
}
noInline(opaqueGetByValKnownArray);


for (let i = 0; i < 1e3; ++i) {
    if (opaqueGetByValKnownArray(0) !== undefined)
        throw "Failed opaqueGetByValKnownArray(0)";
}


for (let i = 0; i < 1e3; ++i) {
    if (opaqueGetByValKnownArray(-1) !== undefined)
        throw "Failed opaqueGetByValKnownArray(-1)";
}