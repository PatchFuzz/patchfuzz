function store(obj, name) {
  return obj[name] = 0;
}

function f(obj) {
  var key = {
    toString() { throw new Error("boom"); }
  };
  store(obj, key);
}

(function() {
  var proxy = new Proxy({}, {});
  store(proxy, 0)
  print(() => f(proxy), Error);
})();
