



























function C1() {
  this.x = 23;
};
var c1 = new C1();
assertEquals(23, c1.x);
assertEquals("undefined", typeof c1.y);



C1.prototype = { set x(value) { this.y = 23; } };
var c1 = new C1();
assertEquals("undefined", typeof c1.x);
assertEquals(23, c1.y);


function C2() {
  this.x = 23;
};
var c2 = new C2();
assertEquals(23, c2.x);
assertEquals("undefined", typeof c2.y);



C2.prototype.__proto__ = { set x(value) { this.y = 23; } };
var c2 = new C2();
assertEquals("undefined", typeof c2.x);
assertEquals(23, c2.y);


function C3() {
  this.x = 23;
};
var c3 = new C3();
assertEquals(23, c3.x);
assertEquals("undefined", typeof c3.y);



C3.prototype.__defineSetter__('x', function(value) { this.y = 23; });
var c3 = new C3();
assertEquals("undefined", typeof c3.x);
assertEquals(23, c3.y);


function C4() {
  this.x = 23;
};
var c4 = new C4();
assertEquals(23, c4.x);
assertEquals("undefined", typeof c4.y);



C4.prototype.__proto__.__defineSetter__('x', function(value) { this.y = 23; });
var c4 = new C4();
assertEquals("undefined", typeof c4.x);
assertEquals(23, c4.y);
