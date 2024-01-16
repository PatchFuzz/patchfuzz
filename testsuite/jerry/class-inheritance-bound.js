

var g = Array.bind (0, 1, 2, 3)
g.prototype = Array.prototype;

class C extends g {}

class D extends C {
  constructor () {
    super (4, 5);
  }
}

var d = new D;
assert (Object.getPrototypeOf (d) == D.prototype);
