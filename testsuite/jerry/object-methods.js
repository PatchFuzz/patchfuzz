













assert (JSON.stringify (Object.getOwnPropertyNames("hello")) === '["0","1","2","3","4","length"]');

var n = Object.assign(42, {a: "str"});
assert (n instanceof Number);
assert (n.valueOf() === 42);
assert (n.a === "str");

assert (JSON.stringify (Object.getOwnPropertySymbols("hello")) === '[]');

assert (JSON.stringify (Object.keys("str")) === '["0","1","2"]');

var d = Object.getOwnPropertyDescriptor("hello", '1');
assert (d.value === "e");
assert (d.writable === false);
assert (d.enumerable === true);
assert (d.configurable === false);

assert (Object.seal(42) === 42);
assert (Object.seal("a") === "a");
assert (Object.seal(undefined) === undefined);
assert (Object.seal() === undefined);

assert (Object.isSealed(42) === true);
assert (Object.isSealed("a") === true);
assert (Object.isSealed(undefined) === true);
assert (Object.isSealed() === true);

assert (Object.freeze(42) === 42);
assert (Object.freeze("a") === "a");
assert (Object.freeze(undefined) === undefined);
assert (Object.freeze() === undefined);

assert (Object.isFrozen(42) === true);
assert (Object.isFrozen("a") === true);
assert (Object.isFrozen(undefined) === true);
assert (Object.isFrozen() === true);

assert (Object.preventExtensions(42) === 42);
assert (Object.preventExtensions("a") === "a");
assert (Object.preventExtensions(undefined) === undefined);
assert (Object.preventExtensions() === undefined);

assert (Object.isExtensible(42) === false);
assert (Object.isExtensible("a") === false);
assert (Object.isExtensible(undefined) === false);
assert (Object.isExtensible() === false);
