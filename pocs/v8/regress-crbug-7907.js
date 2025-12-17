let arr = new Array(10);
Object.defineProperty(arr, 0, {value: 10, writable: false});
Object.defineProperty(arr, 9, {value: 1, writable: false});

print(() => arr.sort(), TypeError);
