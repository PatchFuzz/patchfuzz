





var f = (x, y=()=>eval("x")) => y();
assertEquals(100, f(100));
