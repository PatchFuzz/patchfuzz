print("\u0178", "\xff".toUpperCase());
print("abcdefghijklmn\xffopq",
             ("ABCDEFGHIJKL" + "MN\u0178OPQ").toLowerCase());
print("\xff", "\u0178".toLowerCase());
print("ABCDEFGHIJKLMN\u0178OPQ",
             ("abcdefghijk" + "lmn\xffopq").toUpperCase());
