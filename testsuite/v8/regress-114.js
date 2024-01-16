



























assertEquals("FRIEDRICHSTRASSE 14", "friedrichstra\xDFe 14".toUpperCase());
assertEquals("XXSSSSSSXX", "xx\xDF\xDF\xDFxx".toUpperCase());
assertEquals("(SS)", "(\xDF)".toUpperCase());
assertEquals("SS", "\xDF".toUpperCase());


assertEquals("i\u0307", "\u0130".toLowerCase());
assertEquals("(i\u0307)", "(\u0130)".toLowerCase());
assertEquals("xxi\u0307xx", "XX\u0130XX".toLowerCase());



assertEquals("\u03A5\u0308\u0301", "\u03B0".toUpperCase());
assertEquals("(\u03A5\u0308\u0301)", "(\u03B0)".toUpperCase());
assertEquals("XX\u03A5\u0308\u0301XX", "xx\u03B0xx".toUpperCase());
