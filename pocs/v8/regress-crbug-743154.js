Object.prototype[1] = 1.5;

var v = { length: 12, [1073741824]: 0 };

print(['1073741824', 'length'], Object.keys(v));
print(undefined, v[0]);
print(1.5, v[1]);
print(0, v[1073741824]);


Array.prototype.sort.call(v);

print(['0', '1073741824', 'length'], Object.keys(v));
print(v.hasOwnProperty(0));
print(1.5, v[0]);
print(v.hasOwnProperty(1));
print(1.5, v[1]);
print(0, v[1073741824]);
