

function assert(a) {
    if (!a)
        throw new Error("Bad assertion");
}

let p = Object.getOwnPropertyDescriptor(BigInt.prototype, Symbol.toStringTag);

assert(p.writable === false);
assert(p.enumerable === false);
assert(p.configurable === true);
assert(p.value === "BigInt");

assert(Object.prototype.toString.call(3n) === "[object BigInt]");
assert(Object.prototype.toString.call(Object(3n)) === "[object BigInt]");



Object.defineProperty(BigInt.prototype, Symbol.toStringTag, {
  value: "FooBar",
  writable: false,
  enumerable: false,
  configurable: true
});

assert(Object.prototype.toString.call(3n) === "[object FooBar]");
assert(Object.prototype.toString.call(Object(3n)) === "[object FooBar]");

