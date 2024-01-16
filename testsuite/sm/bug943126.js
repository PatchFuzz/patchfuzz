

load(libdir + 'eqArrayHelper.js');

assertEqArray("".split(""), []);
assertEqArray("a".split(""), ["a"]);
assertEqArray("abc".split(""), ["a", "b", "c"]);

assertEqArray("abcd".split("", 2), ["a", "b"]);
assertEqArray("abcd".split("", 0), []);
assertEqArray("abcd".split("", -1), ["a", "b", "c", "d"]);


assertEqArray("abcd".split(undefined, 0), []);

assertEqArray("abcd".split(undefined, 1), ["abcd"]);
