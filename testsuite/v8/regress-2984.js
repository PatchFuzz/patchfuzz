


























assertEquals("\u0178", "\xff".toUpperCase());
assertEquals("abcdefghijklmn\xffopq",
             ("ABCDEFGHIJKL" + "MN\u0178OPQ").toLowerCase());
assertEquals("\xff", "\u0178".toLowerCase());
assertEquals("ABCDEFGHIJKLMN\u0178OPQ",
             ("abcdefghijk" + "lmn\xffopq").toUpperCase());
