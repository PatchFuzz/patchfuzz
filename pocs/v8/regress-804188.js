Object.defineProperty(Array.prototype, Symbol.iterator, {
  value: function* () {}
});
const arrayIteratorProto = Object.getPrototypeOf([][Symbol.iterator]());
arrayIteratorProto.next = function() {};

print(() => new Map([[{}, 1], [{}, 2]]), TypeError);
print(() => new WeakMap([[{}, 1], [{}, 2]]), TypeError);
print(() => new Set([{}]), TypeError);
print(() => new WeakSet([{}]), TypeError);
