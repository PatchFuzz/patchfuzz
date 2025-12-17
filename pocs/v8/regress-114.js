print("FRIEDRICHSTRASSE 14", "friedrichstra\xDFe 14".toUpperCase());
print("XXSSSSSSXX", "xx\xDF\xDF\xDFxx".toUpperCase());
print("(SS)", "(\xDF)".toUpperCase());
print("SS", "\xDF".toUpperCase());


print("i\u0307", "\u0130".toLowerCase());
print("(i\u0307)", "(\u0130)".toLowerCase());
print("xxi\u0307xx", "XX\u0130XX".toLowerCase());



print("\u03A5\u0308\u0301", "\u03B0".toUpperCase());
print("(\u03A5\u0308\u0301)", "(\u03B0)".toUpperCase());
print("XX\u03A5\u0308\u0301XX", "xx\u03B0xx".toUpperCase());
