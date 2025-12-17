var a = [];
a[10000] = 1;
a.length = 0;
a[1] = 1;
a.length = 0;
print(undefined, a[1]);

var o = {};
Object.freeze(o);
print(undefined, o[1]);
