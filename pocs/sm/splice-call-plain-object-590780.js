var o = { 0: 1, 1: 2, 2: 3, length: 3 };
Array.prototype.splice.call(o, 0, 1);

print(o[0], 2);
print(o[1], 3);
print(Object.getOwnPropertyDescriptor(o, 2), undefined);
print("2" in o, false);
print(o.length, 2);
