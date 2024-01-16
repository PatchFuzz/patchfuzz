


























var n = 0x8000000000000800;
assertEquals(n, 9223372036854778000);
var s = n.toString(5);
var v = parseInt(s, 5);
assertEquals(n, v);
