;
;

var arr = [0, 1, 2];
var it = arr[Symbol.iterator]();
arr[0] = 1000;
arr[2] = 2000;
print(it, 1000);
print(it, 1);
print(it, 2000);
print(it, undefined);



arr = [0, 1, 2];
var ki = arr.keys();
var ei = arr.entries();
arr[0] = 1000;
arr[2] = 2000;
print(ki, 0);
print(ei, [0, 1000]);
print(ki, 1);
print(ei, [1, 1]);
print(ki, 2);
print(ei, [2, 2000]);
print(ki, undefined);
print(ei, undefined);
