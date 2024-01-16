





























assertEquals(-0, parseInt("-0"));
assertEquals(0, parseInt("+0"));


assertEquals(NaN, parseInt("- 0"));
assertEquals(NaN, parseInt("+ 0"));
assertEquals(NaN, parseInt("-\t0"));
assertEquals(NaN, parseInt("+\t0"));


assertEquals(-0, parseInt(" -0"));
assertEquals(0, parseInt(" +0"));
assertEquals(-0, parseInt("\t-0"));
assertEquals(0, parseInt("\t+0"));
