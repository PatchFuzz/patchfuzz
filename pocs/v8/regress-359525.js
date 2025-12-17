var a;
for (var i = 0; i < 2; i++) {
  var x = 42 + a - {};
  print(x);
  a = "";
}


var b = 1.4;
var val = 0;
var o = {valueOf:function() { val++; return 10; }};
for (var i = 0; i < 2; i++) {
  var x = (b + i) + o;
  b = "";
}
print(val, 2);
