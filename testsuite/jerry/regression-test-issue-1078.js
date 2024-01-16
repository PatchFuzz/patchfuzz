













Array.prototype.splice(Function.prototype, 1, this);
Object.freeze(Array.prototype);
var res = (new String("Hello")).split(new RegExp());
assert(res.length == 5);
