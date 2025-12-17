;

var constructors = [Array, String, Uint8Array, Uint8ClampedArray];
for (var c of constructors) {
    print(c.prototype[Symbol.iterator].length, 0);

    var loc = (c === Array || c === String)
            ? c.prototype
            : Object.getPrototypeOf(c.prototype);

    var desc = Object.getOwnPropertyDescriptor(loc, Symbol.iterator);
    print(desc.configurable, true);
    print(desc.enumerable, false);
    print(desc.writable, true);
}
