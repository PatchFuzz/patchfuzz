
































var i = 100000;
var a = new Array(i);
for (var j = 0; j < i; j++) {
  a[j] = 0.5;
}

assertTrue(%HasDoubleElements(a));


for (var j = 0; j < 10; j++) {
  assertEquals(j, a[j] = j);
}


for (var j = 0; j < 10; j++) {
  var v = j + 0.5;
  assertEquals(v, a[j] = v);
}
