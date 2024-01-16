



var arr = [];
assertSame(0, arr.length);
assertSame(undefined, arr[0]);
Object.defineProperty(arr, '2501866687', { value: 4, configurable: false });

assertSame(2501866688, arr.length);
assertSame(undefined, arr[0]);
arr.length = 0;
