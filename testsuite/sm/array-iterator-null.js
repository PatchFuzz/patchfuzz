

load(libdir + "asserts.js");
load(libdir + "iteration.js");

for (var v of [undefined, null]) {
    
    assertThrowsInstanceOf(function () { Array.prototype[Symbol.iterator].call(v); }, TypeError);
    assertThrowsInstanceOf(function () { Array.prototype.keys.call(v); }, TypeError);
    assertThrowsInstanceOf(function () { Array.prototype.entries.call(v); }, TypeError);
}
