



var a = [];
a[10000] = 1;
a.length = 0;
a[1] = 1;
a.length = 0;
assertEquals(undefined, a[1]);

var o = {};
Object.freeze(o);
assertEquals(undefined, o[1]);
