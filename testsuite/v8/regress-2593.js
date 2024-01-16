




























p1 =  { };
p2 =  { };
p3 =  { x : 1 };
p2.__proto__ = p3
p1.__proto__ = p2


p1.z = 1
delete p1.z


for (var i = 0; i < 10; i++) gc();

function f2() {
  p2.x;
}

function f1() {
  return p1.x;
}


for (var i = 0; i < 10; i++) f2();


for (var i = 0; i < 10; i++) f1();

assertEquals(1, f1());

p2.x = 2;

assertEquals(2, f1());
