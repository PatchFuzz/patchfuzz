













try {
    Object.prototype.__proto__ = new Proxy({}, {});
    assert(false);
} catch (e) {
    assert(e instanceof TypeError);
}

try {
    __proto__.__proto__ = new Proxy({}, {});
    assert(false);
} catch (e) {
    assert(e instanceof TypeError);
}
