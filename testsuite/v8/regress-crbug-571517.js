



function Receiver() { this.receiver = "receiver"; }
function Proto() { this.proto = "proto"; }

function f(a) {
  return a.foo;
}

var rec = new Receiver();




var proto = rec.__proto__;


assertEquals(undefined, f(rec));
assertEquals(undefined, f(rec));


var p2 = new Proto();
p2.__proto__ = null;
proto.__proto__ = p2;


assertEquals(undefined, f(rec));


p2.foo = "bar";
assertEquals("bar", f(rec));



delete p2.foo;
p2.secret = "GAME OVER";
assertEquals(undefined, f(rec));
