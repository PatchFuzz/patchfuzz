var ga = 10;
var gb = 10;

Object.defineProperty(Object.prototype, "a", {
    set: function(a) { eval("ga = true;"); },
    get: function() { eval("gb = true;"); }
  });

function foo() {
  var x = {};
  x.a = 10;
  print(ga + 1, 2);
}
foo();

function bar() {
  var x = {};
  var a = x.a;
  print(gb + 1, 2);
}
bar();
