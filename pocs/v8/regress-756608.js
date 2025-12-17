print(function() {
  'foo' in new Proxy({}, {has: 0});
}, TypeError);
