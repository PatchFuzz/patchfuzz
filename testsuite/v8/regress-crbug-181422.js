


























assertArrayEquals(["\u00a0"], "ab\u00a0cd".match(/\s/));
assertArrayEquals(["a", "b", "c", "d"], "ab\u00a0cd".match(/\S/g));

assertArrayEquals(["\u00a0"], "\u2604b\u00a0cd".match(/\s/));
assertArrayEquals(["\u2604", "b", "c", "d"], "\u2604b\u00a0cd".match(/\S/g));
