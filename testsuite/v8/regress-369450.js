





var v = [1.3];
v.length = 0;

var json = JSON.stringify(v);
assertEquals("[]", json);

Array.prototype[0] = 5.5;
var arr = [].concat(v, [{}], [2.3]);
assertEquals([{}, 2.3], arr);
