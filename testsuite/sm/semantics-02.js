

load(libdir + "asserts.js");
load(libdir + "iteration.js");

function test(v) {
    Array.prototype[Symbol.iterator] = v;
    assertThrowsInstanceOf(function () { for (var x of []) ; }, TypeError);
}
test(undefined);
test(null);
test({});
