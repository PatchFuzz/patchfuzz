print(function test() {
  var proxy = new Proxy({}, {});
  var key_or_proxy = 0;

  function failing_get() {
    return proxy[key_or_proxy];
  }

  failing_get();

  key_or_proxy = new Proxy({
    toString() {
      throw new TypeError('error');
    }
  }, {});

  failing_get();
}, TypeError);
