































var a = new Array(1,2,1);
assertEquals(1, a.lastIndexOf(2));
assertEquals(2, a.lastIndexOf(1));
assertEquals(0, a.lastIndexOf(1, undefined));
assertEquals(0, a.lastIndexOf(1, null));
assertEquals(-1, a.lastIndexOf(2, undefined));
assertEquals(-1, a.lastIndexOf(2, null));
