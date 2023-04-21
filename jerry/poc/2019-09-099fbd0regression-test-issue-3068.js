













var arr = [0, Infinity];
Object.defineProperties(arr, {
    length: {
    value: 1,
    }
});

print(arr.length === 1);
print(arr[0] === 0);
