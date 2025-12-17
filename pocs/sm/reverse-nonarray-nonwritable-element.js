;


var obj = {0: "zero", length: 2, reverse: [].reverse};
Object.defineProperty(obj, "1", {configurable: true, value: "one", writable: false});
print(() => obj.reverse(), TypeError);


Object.defineProperty(obj, "1", {configurable: true, get: () => "one"});
print(() => obj.reverse(), TypeError);
