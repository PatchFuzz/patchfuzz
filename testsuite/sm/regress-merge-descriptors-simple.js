


























var extend = function (d, b) {
  function foo() { this.constructor = d; }
  foo.prototype = b.prototype;
  d.prototype = new foo();
};

var Car = (function (Super) {
  var Car = function () {}
  extend(Car, Super);
}(Object));
