

load(libdir + "asserts.js");

new WeakMap();
new WeakMap(undefined);
new WeakMap(null);

assertThrowsInstanceOf(() => WeakMap(), TypeError);
assertThrowsInstanceOf(() => WeakMap(undefined), TypeError);
assertThrowsInstanceOf(() => WeakMap(null), TypeError);
