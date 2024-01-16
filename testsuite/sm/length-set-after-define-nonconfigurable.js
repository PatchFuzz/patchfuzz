var arr = [1];
Object.defineProperty(arr, 1, { value: undefined, configurable: false });



for (var y = 0; y < 9; y++)
  arr.length = 1;
