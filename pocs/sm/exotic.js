var o = {};
function what(q) {
  function inner() { return q; }
  o.f = inner;
  var a = o.f();
  return a;
}
for (var i = 0; i < 10; i++) {
  var a = what(i);
  print(a, i);
}



var global = 3;
function foo(x, y) {
  var q = x.apply(null, y);
  if (q != 10)
    print(global, true);
}
foo(function(a) { global = a; return 10; }, [1]);
foo(function(a) { global = a; return 10; }, [1]);
foo(function(a) { global = a; return 10; }, [1]);
print(global, 1);
foo(function(a) { global = a; return 3; }, [true]);
print(global, true);



var oglobal = 3;
function xfoo(x, y) {
  var q = x.apply(null, y);
  if (q != 10)
    print(oglobal, true);
}
xfoo(function(a) { oglobal = a; return 10; }, [1]);
xfoo(function(a) { oglobal = a; return 10; }, [1]);
xfoo(function(a) { oglobal = a; return 10; }, [1]);
print(oglobal, 1);
xfoo(function(a) { [1,2,3]; oglobal = a; return 3; }, [true]);
print(oglobal, true);



weirdarray = [,,1,2,3];
Object.defineProperty(weirdarray, 0, {get: function() { vglobal = 'true'; }});

var vglobal = 3;
function yfoo(x, y) {
  var q = x.apply(null, y);
  if (q != 10)
    print(vglobal, 'true');
  else
    print(vglobal, 3);
}
yfoo(function(a) { return 10; }, [1]);
yfoo(function(a) { return 10; }, [1]);
yfoo(function(a) { return 10; }, [1]);
yfoo(function() { return 0; }, weirdarray);
