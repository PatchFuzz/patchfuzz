var o = {x: 10};
Object.defineProperty(o, "x", {value: 5});
var desc = Object.getOwnPropertyDescriptor(o, "x");
print(desc["writable"]);
