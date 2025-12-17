var o = {};
o.a = 1;
o.b = function() { return 1; };
o.d = 2;

for (var x in o) { }

var o1 = {};
o1.a = 1;
o1.b = 10;
o1.c = 20;

var keys = ["a", "b", "c"];

var i = 0;
for (var y in o1) {
  print(keys[i], y);
  i += 1;
}
