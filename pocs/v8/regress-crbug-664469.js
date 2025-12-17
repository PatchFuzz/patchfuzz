function f(a, i) {
  a[i] = "object";
}

f("make it generic", 0);


var kLength = 500000 / 8;
var kValue = 0.1;
var a = new Array(kLength);
for (var i = 0; i < kLength; i++) {
  a[i] = kValue;
}
f(a, 0);
for (var i = 1; i < kLength; i++) {
  print(kValue, a[i]);
}
