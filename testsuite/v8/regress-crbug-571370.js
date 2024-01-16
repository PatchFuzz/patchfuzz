



var val = [0.5];
var arr = [0.5];
for (var i = -1; i < 1; i++) {
  arr[i] = val;
}
assertEquals(val, arr[-1]);
