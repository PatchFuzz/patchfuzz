


load(libdir + "asserts.js");

function* data() {
    yield [{}, "XR22/Z"];
    yield [{}, "23D-BN"];
    throw "oops";
}

var it2 = data();
assertThrowsValue(() => new WeakMap(it2), "oops");
