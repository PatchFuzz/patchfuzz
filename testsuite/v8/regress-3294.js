



var e = new Error('message');
var keys = Object.keys(e);
e.stack;
assertEquals(keys, Object.keys(e));
