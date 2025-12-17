var arr = [];
print(0, arr.length);
print(undefined, arr[0]);
Object.defineProperty(arr, '2501866687', { value: 4, configurable: false });

print(2501866688, arr.length);
print(undefined, arr[0]);
arr.length = 0;
