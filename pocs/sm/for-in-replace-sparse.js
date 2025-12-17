var arr = [];
Object.defineProperty(arr, 0, {writable: false, configurable: true, enumerable: true, value: 0});

for (var p in arr) {
  
  print(p, "0");
  delete arr[0];
  arr[0] = 0;
  arr[1] = 1;
  arr.reverse();
}
