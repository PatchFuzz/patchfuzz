






























var count = 1e5;
var arr = new Array(count);
assertFalse(%HasDoubleElements(arr));
for (var i = 0; i < count; i++) {
  arr[i] = 0;
}
assertFalse(%HasDoubleElements(arr));
assertTrue(%HasSmiElements(arr));
