


























var obj = { 0: "obj0" };


var k = 16777217;
var h = "" + k;

obj[k] = "obj" + k;


for (var i = 0; i < 10; i++) { ({})[h]; }

function get(idx) { return obj[idx]; }

assertEquals(get(0), "obj0");
assertEquals(get(h), "obj" + h);
