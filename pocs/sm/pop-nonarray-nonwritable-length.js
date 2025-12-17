;


var obj = {pop: [].pop, 0: "zero"};
Object.defineProperty(obj, "length", {configurable: true, value: 1, writable: false});
print(() => obj.pop(), TypeError);


obj = {pop: [].pop, 0: "zero", get length() { return 1; }};
print(() => obj.pop(), TypeError);
