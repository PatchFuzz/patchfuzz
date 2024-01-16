













var obj = {
  get source() {
      return "Iam"
  },
  [Symbol.match]: true
}

var regexp = new RegExp(obj);
assert(regexp.source === "Iam");

Object.defineProperty(obj, 'flags', {'get' : function () {throw 42}});

try {
  new RegExp(obj);
  assert(false);
} catch (e) {
  assert(e === 42);
}
