


load(libdir + "asserts.js");


var obj = {0: "zero", length: 2, reverse: [].reverse};
Object.defineProperty(obj, "1", {configurable: true, value: "one", writable: false});
assertThrowsInstanceOf(() => obj.reverse(), TypeError);


Object.defineProperty(obj, "1", {configurable: true, get: () => "one"});
assertThrowsInstanceOf(() => obj.reverse(), TypeError);
