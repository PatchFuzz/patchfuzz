





function P() {
  this.a0 = {};
  this.a1 = {};
  this.a2 = {};
  this.a3 = {};
  this.a4 = {};
}

function A() {
}

var proto = new P();
A.prototype = proto;

function foo(o) {
  return o.a0;
}


gc();
gc();
gc();


var o = new A();
%EnsureFeedbackVectorForFunction(foo);
foo(o);
foo(o);
foo(o);
assertEquals(!%IsDictPropertyConstTrackingEnabled(),
             %HasFastProperties(proto));



var buffer = new ArrayBuffer(8);
var int32view = new Int32Array(buffer);
var float64view = new Float64Array(buffer);
int32view[0] = int32view[1] = 0x40000001;
var boom = float64view[0];



proto.a4 = {a: 0};

delete proto.a4;


assertEquals(!%IsDictPropertyConstTrackingEnabled(),
             %HasFastProperties(proto));


proto.boom = boom;


gc();
