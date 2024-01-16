



Object.defineProperty(Array.prototype, Symbol.iterator, {
  value: function* () {}
});
const arrayIteratorProto = Object.getPrototypeOf([][Symbol.iterator]());
arrayIteratorProto.next = function() {};

assertThrows(() => new Map([[{}, 1], [{}, 2]]), TypeError);
assertThrows(() => new WeakMap([[{}, 1], [{}, 2]]), TypeError);
assertThrows(() => new Set([{}]), TypeError);
assertThrows(() => new WeakSet([{}]), TypeError);
