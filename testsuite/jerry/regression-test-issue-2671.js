













class Shape {
  constructor (id,x,y) {
    this.id = id;
    this.x = x;
    this.y = y;
  }
  toString () {
      return "Shape(" + this.id + ")"
  }
}
class Rectangle extends Shape {
  constructor (id, x, y, width, height) {
      super (id, x, y);
  }
  toString () {
      return "Rectangle > " + super.toString ();
  }
}
class Circle extends Shape {
  constructor (id, x, y, radius) {
      super (id, x, y);
  }
  toString () {
      return "Circle > " + super.toString ();
  }
}
var shape = new Shape (0, 0, 0);
var rec = new Rectangle (1, 0, 0, 4, 4);
var circ = new Circle (2, 0, 0, 4);

assert (Object.keys (shape).toString () === "id,x,y");
assert (rec.id === 1);
assert (circ.id === 2);
assert (rec.toString () === "Rectangle > Shape(1)");
assert (circ.toString () === "Circle > Shape(2)");
