



function get() {
  
  
  o1.c = 10;
  
  
  
  o2.b = "string";
  return 1;
}

function Foo() {
  Object.defineProperty(this, "a", {get, enumerable: true});
  
  this.b = 1.5;
}

var o1 = new Foo();
var o2 = new Foo();
var target = {};
Object.assign(target, o2);

assertEquals(target.b, "string");
