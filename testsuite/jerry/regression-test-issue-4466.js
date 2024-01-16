













var called_get = false;
var targetProxy = new Proxy({}, {
  getOwnPropertyDescriptor: function(target, key) {
    throw new URIError("Generate error");
  }
});

var px = new Proxy(targetProxy, {
  get: function(target, key) {
    called_get = true;
    return { debug: 1 };
  }
});

try {
  px.abc;
  assert(false);
} catch (ex) {
  assert(ex instanceof URIError);
  assert(called_get === true);
}
