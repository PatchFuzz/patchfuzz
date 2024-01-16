



function A() {
  Object.defineProperty(this, "x", { set: function () {}, get: function () {}});
  this.a = function () { return 1; }
}

function B() {
  A.apply( this );
  this.a = function () { return 2; }
}

var b = new B();
assertTrue(Object.getOwnPropertyDescriptor(b, "a").enumerable);
