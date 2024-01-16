
function f() {
  var arr = new Int8Array(10);
  x = function () { return arr.length; }
  for (var i = 0; i < arr.length; i++) {
    arr[i] = i;
  }
  assertEq(arr[5], 5);
}
f();
