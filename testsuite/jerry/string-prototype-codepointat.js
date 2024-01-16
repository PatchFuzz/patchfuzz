













var str = "A🌃B\uD800";
var obj = {};


assert(str.codePointAt(0) === 65);
assert(str.codePointAt(1) === 127747);
assert(str.codePointAt(2) === 57091);
assert(str.codePointAt(3) === 66);
assert(str.codePointAt(4) === 55296);


assert(str.codePointAt("a") === 65);
assert(str.codePointAt("B") === 65);


assert(str.codePointAt(obj) === 65);


assert(str.codePointAt(NaN) === 65);


assert(str.codePointAt(5) === undefined);
assert(str.codePointAt(10) === undefined);


assert(str.codePointAt(-1) === undefined);
assert(str.codePointAt(-5) === undefined);
assert(str.codePointAt(-0) === 65);


assert(str.codePointAt(undefined) === 65);
assert(str.codePointAt(Infinity) === undefined);
assert(str.codePointAt(-Infinity) === undefined);


assert(str.codePointAt(true) === 127747);
assert(str.codePointAt(false) === 65);


assert(str.codePointAt(4294967299) === undefined);
