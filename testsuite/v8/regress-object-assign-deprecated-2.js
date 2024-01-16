



var x = {a:1, b:2};
Object.defineProperty(x, "c", {set(v) {}})
var y = {get c() { return {a:1, b:2.5} }};
Object.assign(x, y, x);
