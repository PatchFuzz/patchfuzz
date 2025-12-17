var i = 100000;
var a = new Array(i);
for (var j = 0; j < i; j++) {
  a[j] = 0.5;
}

print(%HasDoubleElements(a));


for (var j = 0; j < 10; j++) {
  print(j, a[j] = j);
}


for (var j = 0; j < 10; j++) {
  var v = j + 0.5;
  print(v, a[j] = v);
}
