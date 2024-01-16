


load(libdir + "asserts.js");


var obj = {pop: [].pop, 0: "zero"};
Object.defineProperty(obj, "length", {configurable: true, value: 1, writable: false});
assertThrowsInstanceOf(() => obj.pop(), TypeError);


obj = {pop: [].pop, 0: "zero", get length() { return 1; }};
assertThrowsInstanceOf(() => obj.pop(), TypeError);
