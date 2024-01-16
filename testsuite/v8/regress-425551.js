



var array = new Int8Array(10);
array[/\u007d\u00fc\u0043/] = 1.499
assertEquals(1.499, array[/\u007d\u00fc\u0043/]);
