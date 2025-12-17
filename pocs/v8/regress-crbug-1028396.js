(function () {
  var GeneratorFunction = function* () {}.constructor;
  class MyFunc extends GeneratorFunction {
    constructor(...args) {
      super(...args);
      this.o = {};
      this.o = {};
    }
  }
  var f = new MyFunc("'use strict'; yield 153;");
  gc();
  var f = new MyFunc("'use strict'; yield 153;");
})();
