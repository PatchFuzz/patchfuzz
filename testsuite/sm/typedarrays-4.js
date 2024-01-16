

load(libdir + "asserts.js");
assertThrowsInstanceOf(function () {
    for (var v of Int8Array.prototype)
        throw "FAIL";
}, TypeError);
