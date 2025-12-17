let o1 = { a: 1, b: 0 };
let o2 = { a: 2, b: 0 };
print(%HaveSameMap(o1, o2));
print(%HasOwnConstDataProperty(o1, "a"));
print(%HasOwnConstDataProperty(o1, "b"));

Object.defineProperty(o1, "b", {
  value: 4.2, enumerable: true, configurable: true, writable: true,
});
print(%HaveSameMap(o1, o2));
print(%HasOwnConstDataProperty(o1, "a"));
print(%HasOwnConstDataProperty(o1, "b"));
print(%HasOwnConstDataProperty(o2, "a"));
print(%HasOwnConstDataProperty(o2, "b"));

let o3 = { a: "foo", b: 0 };
print(%HaveSameMap(o2, o3));
print(%HasOwnConstDataProperty(o3, "a"));
print(%HasOwnConstDataProperty(o3, "b"));

Object.defineProperty(o2, "a", {
  value:2, enumerable: false, configurable: true, writable: true,
});
print(%HasOwnConstDataProperty(o1, "a"));
print(%HasOwnConstDataProperty(o1, "b"));
print(%HasOwnConstDataProperty(o3, "a"));
print(%HasOwnConstDataProperty(o3, "b"));

print(%HasOwnConstDataProperty(o2, "a"));
print(%HasOwnConstDataProperty(o2, "b"));
