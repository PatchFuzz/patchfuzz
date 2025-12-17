(function () {
  function f() {
    arguments.length = -5;
    Array.prototype.slice.call(arguments);
  }
  f('a')
})();

(function () {
  function f() {
    arguments.length = 2.3;
    Array.prototype.slice.call(arguments);
  }
  f('a')
})();

(function () {
  function f( __v_59960) {
    arguments.length = -5;
    Array.prototype.slice.call(arguments);
  }
  f('a')
})();

(function () {
  function f( __v_59960) {
    arguments.length = 2.3;
    Array.prototype.slice.call(arguments);
  }
  f('a')
})();
