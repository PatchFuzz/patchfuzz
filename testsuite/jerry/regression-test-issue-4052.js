













var obj = {};
var proxy = new Proxy(obj, {
    getOwnPropertyDescriptor: function (target, property) {
    },
});
var proxy2 = new Proxy(proxy, {
    a: obj.prop2++
});

try {
  Object.freeze(proxy);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}

try {
  Object.seal(proxy);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}
