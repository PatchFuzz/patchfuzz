var arr = [0, Infinity];
Object.defineProperties(arr, {
    length: {
    value: 1,
    }
});

assert(arr.length === 1);
assert(arr[0] === 0);
