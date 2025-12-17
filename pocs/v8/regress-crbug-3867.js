function props(x) {
  var result = [];
  for (var p in x) result.push(p);
  return result;
}

function A() {
  this.a1 = 1234;
  this.a2 = "D";
  this.a3 = false;
}

function B() {
  this.b3 = false;
  this.b2 = "D";
  this.b1 = 1234;
}

function C() {
  this.c3 = false;
  this.c1 = 1234;
  this.c2 = "D";
}

print(["a1", "a2", "a3"], props(new A()));
print(["b3", "b2", "b1"], props(new B()));
print(["c3", "c1", "c2"], props(new C()));
print(["s1", "s2", "s3"], props({s1: 0, s2: 0, s3: 0}));
print(["s3", "s2", "s1"], props({s3: 0, s2: 0, s1: 0}));
print(["s3", "s1", "s2"], props({s3: 0, s1: 0, s2: 0}));

var a = new A()
a.a0 = 0;
a.a4 = 0;
print(["a1", "a2", "a3", "a0", "a4"], props(a));

var b = new B()
b.b4 = 0;
b.b0 = 0;
print(["b3", "b2", "b1", "b4", "b0"], props(b));

var o1 = {s1: 0, s2: 0, s3: 0}
o1.s0 = 0;
o1.s4 = 0;
print(["s1", "s2", "s3", "s0", "s4"], props(o1));

var o2 = {s3: 0, s2: 0, s1: 0}
o2.s4 = 0;
o2.s0 = 0;
print(["s3", "s2", "s1", "s4", "s0"], props(o2));
