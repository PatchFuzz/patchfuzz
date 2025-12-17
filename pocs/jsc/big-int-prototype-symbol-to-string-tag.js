function print(a) {
    if (!a)
        throw new Error("Bad assertion");
}

let p = Object.getOwnPropertyDescriptor(BigInt.prototype, Symbol.toStringTag);

print(p.writable === false);
print(p.enumerable === false);
print(p.configurable === true);
print(p.value === "BigInt");

print(Object.prototype.toString.call(3n) === "[object BigInt]");
print(Object.prototype.toString.call(Object(3n)) === "[object BigInt]");



Object.defineProperty(BigInt.prototype, Symbol.toStringTag, {
  value: "FooBar",
  writable: false,
  enumerable: false,
  configurable: true
});

print(Object.prototype.toString.call(3n) === "[object FooBar]");
print(Object.prototype.toString.call(Object(3n)) === "[object FooBar]");

