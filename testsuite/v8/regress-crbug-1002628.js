





"use strict";
var __v_0 = {};
try {
    __v_0 = this;
    Object.freeze(__v_0);
}
catch (e) {
}

function f() {
    x = { [Symbol.toPrimitive]: () => FAIL };
}
try {
    f()
} catch (e) { }
assertThrows(() => f(), ReferenceError);
