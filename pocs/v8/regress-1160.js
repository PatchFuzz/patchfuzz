var N = 10;
var array = Array(N);
for (var i = 0; i < N; ++i) {
  array[i] = i;
}
Array.prototype.__defineSetter__(2, function() { });
print("0,1,2,3,4,5,6,7,8,9", array.join(","));
