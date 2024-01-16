































function assert(a) {
    if (!a)
        throw new Error("Bad assertion");
}

assert.sameValue = function (input, expected, message) {
    if (input !== expected)
        throw new Error(message);
}

assert.sameValue(~0n, -1n, "~0n === -1n");
assert.sameValue(~(0n), -1n, "~(0n) === -1n");
assert.sameValue(~1n, -2n, "~1n === -2n");
assert.sameValue(~-1n, 0n, "~-1n === 0n");
assert.sameValue(~(-1n), 0n, "~(-1n) === 0n");
assert.sameValue(~~1n, 1n, "~~1n === 1n");
assert.sameValue(~0x5an, -0x5bn, "~0x5an === -0x5bn");
assert.sameValue(~-0x5an, 0x59n, "~-0x5an === 0x59n");
assert.sameValue(~0xffn, -0x100n, "~0xffn === -0x100n");
assert.sameValue(~-0xffn, 0xfen, "~-0xffn === 0xfen");
assert.sameValue(~0xffffn, -0x10000n, "~0xffffn === -0x10000n");
assert.sameValue(~-0xffffn, 0xfffen, "~-0xffffn === 0xfffen");
assert.sameValue(~0xffffffffn, -0x100000000n, "~0xffffffffn === -0x100000000n");
assert.sameValue(~-0xffffffffn, 0xfffffffen, "~-0xffffffffn === 0xfffffffen");
assert.sameValue(
  ~0xffffffffffffffffn, -0x10000000000000000n,
  "~0xffffffffffffffffn === -0x10000000000000000n");
assert.sameValue(
  ~-0xffffffffffffffffn, 0xfffffffffffffffen,
  "~-0xffffffffffffffffn === 0xfffffffffffffffen");
assert.sameValue(
  ~0x123456789abcdef0fedcba9876543210n, -0x123456789abcdef0fedcba9876543211n,
  "~0x123456789abcdef0fedcba9876543210n === -0x123456789abcdef0fedcba9876543211n");

