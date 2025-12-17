var x = Array(4);
x[0] = 1;
x[1] = 2;
x[2] = 3;
var y = x.concat();
print(y[3], undefined);

var z = x.concat(/abc/).pop();
print(z.source, "abc");
