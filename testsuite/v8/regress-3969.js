





function Inner() {
  this.property = "OK";
  this.o2 = 1;
}

function Outer(inner) {
  this.inner = inner;
}

var inner = new Inner();
var outer = new Outer(inner);

Outer.prototype.boom = function() {
  return this.inner.property;
};

%PrepareFunctionForOptimization(Outer.prototype.boom);
assertEquals("OK", outer.boom());
assertEquals("OK", outer.boom());
%OptimizeFunctionOnNextCall(Outer.prototype.boom);
assertEquals("OK", outer.boom());

inner = undefined;
%SetAllocationTimeout(6 , 2 );


delete outer.inner;

outer = new Outer({field: 1.51, property: "OK"});

assertEquals("OK", outer.boom());
