let obj = ({ __proto__: { x: class {} }, y() { return new super.x; } });
obj.y();

class A { static a = class {} }
class B extends A { static b() { return new super.a(); } }
B.b();
