













var obj = {};
assert(Reflect['defineProperty'](obj, 'x', {value: 7}) === true);
assert(Reflect['defineProperty'](obj, 'y', {value: function() {throw 5}}) === true);
try {
    Reflect['defineProperty'](obj, {toString: function() {throw new TypeError(5)}}, {value: 8});
    assert(false);
} catch (e) {
    assert(e instanceof TypeError);
}
