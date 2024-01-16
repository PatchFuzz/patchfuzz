





function Inner() {
  this.p1 = 0;
  this.p2 = 3;
}

function Outer() {
  this.p3 = 0;
}

var i1 = new Inner();
var i2 = new Inner();
var o1 = new Outer();
o1.inner = i1;


i1.p1 = 0.5;

print(i2.p1);
gc();



i2.p2 = 0.5;

var o2 = new Outer();
o2.p3 = 0.5;
o2.inner = i2;


print(o1.p3);



function loader(o) {
  return o.inner.p2;
};
%PrepareFunctionForOptimization(loader);
loader(o2);
loader(o2);
%OptimizeFunctionOnNextCall(loader);
assertEquals(0.5, loader(o2));
assertEquals(3, loader(o1));
gc();  
