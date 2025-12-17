var o = { x: 0, f: function() { return 42; } };
delete o.x;  

function CallF(o) {
  return o.f();
}


for (var i = 0; i < 10; i++) print(42, CallF(o));

var caught = false;
o.f = 87;
try {
  CallF(o);
} catch (e) {
  caught = true;
  print(e instanceof TypeError);
}
print(caught);
