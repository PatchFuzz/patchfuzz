function testDenseAndSparse1() {
  var arr = [1, 2, 3, 4, 5];
  arr[2000000] = 2;
  arr[1000000] = 1;
  print(arr.length, 2000001);
  arr.length = 1500000;
  print(Object.keys(arr).length, 6);
  arr.length = 2;
  print(Object.keys(arr).length, 2);
  print(JSON.stringify(arr), "[1,2]");
}
testDenseAndSparse1();

function testDenseAndSparse2() {
  var arr = [1, 2, 3, 4, 5, 6];
  Object.defineProperty(arr, 1, {configurable: true, writable: false, value: -2});
  Object.defineProperty(arr, 3, {configurable: true, get: () => -4});
  print(JSON.stringify(arr), "[1,-2,3,-4,5,6]");

  arr.length = 4;
  print(Object.keys(arr).length, 4);
  print(JSON.stringify(arr), "[1,-2,3,-4]");

  arr.length = 3;
  print(Object.keys(arr).length, 3);
  print(JSON.stringify(arr), "[1,-2,3]");

  arr.length = 2;
  print(Object.keys(arr).length, 2);
  print(JSON.stringify(arr), "[1,-2]");

  arr.length = 1;
  print(Object.keys(arr).length, 1);
  print(JSON.stringify(arr), "[1]");

  arr.length = 0;
  print(Object.keys(arr).length, 0);
  print(JSON.stringify(arr), "[]");

  arr[0] = 11;
  arr[1] = 22;
  arr[2] = 33;
  print(Object.keys(arr).length, 3);
  print(JSON.stringify(arr), "[11,22,33]");
}
testDenseAndSparse2();
