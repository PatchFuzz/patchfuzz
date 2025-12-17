;
;

var arr = [0, 1, 2];
var it = arr[Symbol.iterator]();
var ki = arr.keys();
var ei = arr.entries();

print(it, 0);
print(it, 1);
print(ki, 0);
print(ki, 1);
print(ei, [0, 0]);
print(ei, [1, 1]);
arr.length = 1;
print(it, undefined);
print(ki, undefined);
print(ei, undefined);
