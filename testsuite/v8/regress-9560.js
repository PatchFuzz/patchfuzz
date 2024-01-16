



var value = 0;

[{ set prop(v) { value = v } }.prop = 12 ] = [ 1 ]

assertEquals(1, value);
