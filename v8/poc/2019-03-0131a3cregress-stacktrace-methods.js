





























function Hest() {}
function Svin() {}

Svin.prototype.two = function() {  o.three(); }

Hest.prototype.one = function(x) { x.two(); }

Hest.prototype.three = function() { if (v == 42) throw new Error("urg"); }

var o = new Hest();
var s = new Svin();
var v = 0;

%PrepareFunctionForOptimization(Hest.prototype.one);
for (var i = 0; i < 5; i++) {
  o.one(s);
}
%OptimizeFunctionOnNextCall(Hest.prototype.one);
o.one(s);
%PrepareFunctionForOptimization(Hest.prototype.three);
for (var i = 0; i < 5; i++) {
  o.one(s);
}
%OptimizeFunctionOnNextCall(Hest.prototype.three);
o.one(s);

v = 42;

try {
  o.one(s);
} catch (e) {
  var stack = e.stack.toString();
  var p3 = stack.indexOf("at Hest.three");
  var p2 = stack.indexOf("at Svin.two");
  var p1 = stack.indexOf("at Hest.one");
  print(p3 != -1);
  print(p2 != -1);
  print(p1 != -1);
  print(p3 < p2);
  print(p2 < p1);
  print(stack.indexOf("38:56") != -1);
  print(stack.indexOf("34:51") != -1);
  print(stack.indexOf("36:38") != -1);
  print(stack.indexOf("60:5") != -1);
}
