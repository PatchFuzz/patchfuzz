var array_1 = [];

for (var a = 0; a < 10000; a++) { array_1[a * 100] = 0; }

gc();
gc();

var array_2 = [];
for (var i = 0; i < 321361; i++) {
  array_2[i] = String.fromCharCode(i)[0];
}
