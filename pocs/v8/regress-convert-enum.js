var o = {};
o.a = 1;
o.c = 2;



var o1 = {};
o1.a = 1;


for (var x in o1) { }
o1.b = function() { return 1; };


o = null;
gc();



var o2 = {};
o2.a = 1;
o2.b = 10;


var o3 = {};
o3.a = 1;

for (var y in o3) { }
