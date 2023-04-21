













var arr = [];
arr.length = 10;
arr.splice(0, 17);
arr.length = 4294967294;
arr.splice(1, 1, 1);

print(arr.length === 4294967294);
print(arr[0] === undefined);
print(arr[1] === 1);
print(arr[2] === undefined);
