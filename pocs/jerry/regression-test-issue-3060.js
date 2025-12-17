var arr = [];
arr.length = 10;
arr.splice(0, 17);
arr.length = 4294967294;
arr.splice(1, 1, 1);

assert(arr.length === 4294967294);
assert(arr[0] === undefined);
assert(arr[1] === 1);
assert(arr[2] === undefined);
