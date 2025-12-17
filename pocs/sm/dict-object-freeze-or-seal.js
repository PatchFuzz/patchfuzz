let sym = Symbol();

let o = {x: 1, y: 2, z: 3, a: 4, b: 5, 12345678: 6, [sym]: 7};
for (let i = 0; i < 100; i++) {
    o["foo" + i] = 1;
}
delete o.x;

Object.seal(o);
print(Object.getOwnPropertyNames(o).length, 105);
print(Object.getOwnPropertySymbols(o).length, 1);

print(Object.isSealed(o), true);
print(Object.isFrozen(o), false);

let desc = Object.getOwnPropertyDescriptor(o, "y");
print(desc.writable, true);
print(desc.configurable, false);

Object.freeze(o);
print(Object.isSealed(o), true);
print(Object.isFrozen(o), true);

desc = Object.getOwnPropertyDescriptor(o, "y");
print(desc.writable, false);
print(desc.configurable, false);
