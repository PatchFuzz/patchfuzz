var count = 1e5;
var arr = new Array(count);
print(%HasDoubleElements(arr));
for (var i = 0; i < count; i++) {
  arr[i] = 0;
}
print(%HasDoubleElements(arr));
print(%HasSmiElements(arr));
