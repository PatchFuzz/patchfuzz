








var number = 1;

(function testFailingInvariant() {
  var obj = {};
  var handler = {
    get: function() {}
  };
  var proxy = new Proxy(obj, handler);
  Object.defineProperty(handler, 'get', {
    get: function() {
      return number;
    }
  });
  assertThrows(function(){ proxy.property; }, TypeError);
})();
