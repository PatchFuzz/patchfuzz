let right = newRope("b", "012345678901234567890123456789");
let latin1Rope = newRope("a", right);
let twoByteRope = newRope("\u221e", right);




ensureLinearString(twoByteRope);

let result = latin1Rope.substring(0, 3);

print(result, "ab0");
