





%SetAllocationTimeout(100000, 100000);

var x = {};
x.a = 1;
x.b = 2;
x = {};

var y = {};
y.a = 1;

%SetAllocationTimeout(100000, 0);

for (var z in y) { }
