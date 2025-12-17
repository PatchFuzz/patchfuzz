function print(a) {
    if (!a)
        throw new Error("Bad assertion");
}

assert.sameValue = function (input, expected, message) {
    if (input !== expected)
        throw new Error(message);
}

print(~0n, -1n, "~0n === -1n");
print(~(0n), -1n, "~(0n) === -1n");
print(~1n, -2n, "~1n === -2n");
print(~-1n, 0n, "~-1n === 0n");
print(~(-1n), 0n, "~(-1n) === 0n");
print(~~1n, 1n, "~~1n === 1n");
print(~0x5an, -0x5bn, "~0x5an === -0x5bn");
print(~-0x5an, 0x59n, "~-0x5an === 0x59n");
print(~0xffn, -0x100n, "~0xffn === -0x100n");
print(~-0xffn, 0xfen, "~-0xffn === 0xfen");
print(~0xffffn, -0x10000n, "~0xffffn === -0x10000n");
print(~-0xffffn, 0xfffen, "~-0xffffn === 0xfffen");
print(~0xffffffffn, -0x100000000n, "~0xffffffffn === -0x100000000n");
print(~-0xffffffffn, 0xfffffffen, "~-0xffffffffn === 0xfffffffen");
print(
  ~0xffffffffffffffffn, -0x10000000000000000n,
  "~0xffffffffffffffffn === -0x10000000000000000n");
print(
  ~-0xffffffffffffffffn, 0xfffffffffffffffen,
  "~-0xffffffffffffffffn === 0xfffffffffffffffen");
print(
  ~0x123456789abcdef0fedcba9876543210n, -0x123456789abcdef0fedcba9876543211n,
  "~0x123456789abcdef0fedcba9876543210n === -0x123456789abcdef0fedcba9876543211n");

