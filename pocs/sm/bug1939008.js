function test() {
  var ta = new Int8Array(1);
  Object.setPrototypeOf(Array.prototype, ta);
  for (var i = 0; i < 20; i++) {
    var arr = [];
    arr[0] = 1;
    arr[10] = 1; 
    arr[1_000_000] = 1; 
    print(arr.length, 1);
    print(arr[0], 1);
  }
  print(ta[0], 0);
}
test();
