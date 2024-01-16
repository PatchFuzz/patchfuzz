



var counter = 0;
var a = { valueOf: function() { counter++; return 0x100; } };
assertEquals("A\u0100\u0100\u0100", String.fromCharCode(65, a, a, a));
assertEquals(3, counter);
