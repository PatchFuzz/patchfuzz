"use strict";

function print(condition) {
    if (!condition)
        throw new Error("Bad assertion");
}

function makeDataView() {
    var buffer = new ArrayBuffer(4);
    return new DataView(buffer);
}

for (var i = 0; i < 1e3; ++i) {
    print(delete makeDataView().byteLength);
    print(delete makeDataView().byteOffset);
    print(Reflect.ownKeys(makeDataView()).length === 0);

    var dv1 = makeDataView();
    Object.defineProperty(dv1, "byteLength", {value: 1});
    print(dv1.byteLength === 1);

    var dv2 = makeDataView();
    Object.defineProperty(dv2, "byteOffset", {value: 2});
    print(dv2.byteOffset === 2);
}
