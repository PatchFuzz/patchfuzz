(function() {
  'use strict';
  class A extends Function {
    constructor(...args) {
      super(...args);
      this.a = 42;
    }
  }
  var v1 = new A("'use strict';");
  function f(func) {
    func.__defineSetter__('a', function() { });
  }
  var v2 = new A();
  f(v2);
  f(v1);
})();
