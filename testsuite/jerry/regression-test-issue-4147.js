













var asyncFunProto = Object.getPrototypeOf (async function() {});
assert (Object.prototype.toString.call (asyncFunProto) === "[object AsyncFunction]")
