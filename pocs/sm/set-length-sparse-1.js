function testSuppressIteration1() {
  var arr = [];
  arr[10000000] = 1;
  arr[20000000] = 2;
  arr[90000000] = 9;
  var seen = [];
  for (var prop in arr) {
    seen.push(prop);
    arr.length = 0;
  }
  print(JSON.stringify(seen), '["10000000"]');
}
testSuppressIteration1();

function testSuppressIteration2() {
  var arr = [];
  arr[10000000] = 1;
  arr[20000000] = 2;
  arr[90000000] = 9;
  var seen = [];
  for (var prop in arr) {
    seen.push(prop);
    arr.length = 20000001;
  }
  print(JSON.stringify(seen), '["10000000","20000000"]');
}
testSuppressIteration2();

function testNonConfigurable() {
  var arr = [];
  arr[100000] = 1;
  Object.defineProperty(arr, 200000, {configurable: false, writable: true, value: 2});
  arr[200005] = 3;
  arr.length = 0;
  print(arr.length, 200001);
  print(JSON.stringify(Object.keys(arr)), '["100000"]');
}
testNonConfigurable();
