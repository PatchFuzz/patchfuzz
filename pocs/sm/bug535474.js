function f() {
  var _76 = {};
  for (var i = 0; i < arguments.length; i++) {
    var typ = arguments[i];
    _76[typ] = typ;
  }
  return function () {
    for (var i = 0; i < arguments.length; i++) {
      if (!(typeof (arguments[i]) in _76)) {
        return false;
      }
    }
    return true;
  }
}

g = f("number", "boolean", "object");

g("a", "b", "c", "d", "e", "f", 2);
g(2, "a", "b", "c", "d", "e", "f", 2);



