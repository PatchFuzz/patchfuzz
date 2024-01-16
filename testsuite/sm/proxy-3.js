

load(libdir + "asserts.js");
load(libdir + "iteration.js");

var p = new Proxy({}, {
    get(target, property) {
        if (property === Symbol.iterator)
            throw "fit";
        return undefined;
    }
});
assertThrowsValue(function () { for (var v of p) {} }, "fit");
