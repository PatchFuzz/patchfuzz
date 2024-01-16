



assertThrows(() => {
  (function (foo, foreign) {
      'use asm';
      var f = foreign.toString;
      function get() {
          f();
      }
      return get;
  })(this, new Error())();
});
