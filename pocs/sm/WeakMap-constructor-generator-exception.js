;

function* data() {
    yield [{}, "XR22/Z"];
    yield [{}, "23D-BN"];
    throw "oops";
}

var it2 = data();
print(() => new WeakMap(it2), "oops");
