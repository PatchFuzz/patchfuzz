var N = 20;
var k = 15;  



function C() {}
C.__proto__ = Object.create(Function.prototype);

for (var i = 0; i < N; i++) {
	var o = new C();
	print(o instanceof C, true);
}



function D() {}

for (var i = 0; i < N; i++) {
    var o = new D();
    if (i == k) {
        D.__proto__ = {[Symbol.hasInstance]() { return false; }};
    }
    print(o instanceof D, i < k);
}



function E() {}

E.__proto__ = Object.create(Object.create(Object.create(Function.prototype)));
var intermediateProto = E.__proto__.__proto__;

for (var i = 0; i < N; i++) {
  var o = new E;
  if (i == k) {
    intermediateProto.__proto__ = {[Symbol.hasInstance]() { return false; }};
  }
  print(o instanceof E, i < k);
}
