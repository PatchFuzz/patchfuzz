



assert(~BigInt("0") === -1n)
assert(~BigInt("-1") === 0n)

assert(~BigInt("0xffffffff") === -0x100000000n)
assert(~BigInt("0x100000000") === -0x100000001n)
assert(~BigInt("0x10000ffff") === -0x100010000n)
assert(~(-BigInt("0xffffffff")) === 0xfffffffen)
assert(~(-BigInt("0x100000000")) === 0xffffffffn)
assert(~(-BigInt("0x10000ffff")) === 0x10000fffen)

assert(~BigInt("0xffffffffffffffff") === -0x10000000000000000n)
assert(~BigInt("0xffffffffffffffffffffffffffffffff") === -0x100000000000000000000000000000000n)
assert(~BigInt("0x100000000000000000000000000000000") === -0x100000000000000000000000000000001n)
assert(~BigInt("0x100000000000000ffffffffffffffffff") === -0x100000000000001000000000000000000n)
assert(~(-BigInt("0xffffffffffffffff")) === 0xfffffffffffffffen)
assert(~(-BigInt("0xffffffffffffffffffffffffffffffff")) === 0xfffffffffffffffffffffffffffffffen)
assert(~(-BigInt("0x100000000000000000000000000000000")) === 0xffffffffffffffffffffffffffffffffn)
assert(~(-BigInt("0xffffffffffffff000000000000000000")) === 0xfffffffffffffeffffffffffffffffffn)



var a = 0n
assert(++a === 1n)
assert(a === 1n)

a = -1n
assert(++a === 0n)
assert(a === 0n)

a = 1n
assert(++a === 2n)
assert(a === 2n)

a = 0xffffffffn
assert(++a === 0x100000000n)
assert(a === 0x100000000n)

a = { b:0xffffffffffffffffn }
assert(++a.b === 0x10000000000000000n)
assert(a.b === 0x10000000000000000n)

a = 0xffffffffffffffffffffffffffffffffn
assert(a++ === 0xffffffffffffffffffffffffffffffffn)
assert(a === 0x100000000000000000000000000000000n)

a = { b:0x100000000000000ffffffffffffffffffn }
assert(a.b++ === 0x100000000000000ffffffffffffffffffn)
assert(a.b === 0x100000000000001000000000000000000n)

a = -0x10000000000000001n;
for (var i = 0; i < 1; i++, a++) ;
assert(a === -0x10000000000000000n)

a = { b:-0x100000000000001000000000000000000n }
for (var i = 0; i < 1; i++, ++a.b) ;
assert(a.b === -0x100000000000000ffffffffffffffffffn)



a = 0n
assert(--a === -1n)
assert(a === -1n)

a = 1n
assert(--a === 0n)
assert(a === 0n)

a = -1n
assert(--a === -2n)
assert(a === -2n)

a = 0x100000000n
assert(--a === 0xffffffffn)
assert(a === 0xffffffffn)

a = -0xffffffffffffffffn
assert(a-- === -0xffffffffffffffffn)
assert(a === -0x10000000000000000n)

a = { b:0x10000000000000000n }
assert(--a.b === 0xffffffffffffffffn)
assert(a.b === 0xffffffffffffffffn)

a = 0x100000000000000000000000000000000n
assert(a-- === 0x100000000000000000000000000000000n)
assert(a === 0xffffffffffffffffffffffffffffffffn)

a = { b:0x100000000000001000000000000000000n }
assert(a.b-- === 0x100000000000001000000000000000000n)
assert(a.b === 0x100000000000000ffffffffffffffffffn)

a = 0x10000000000000001n;
for (var i = 0; i < 1; i++, a--) ;
assert(a === 0x10000000000000000n)

a = { b:-0x100000000000000ffffffffffffffffffn }
for (var i = 0; i < 1; i++, --a.b) ;
assert(a.b === -0x100000000000001000000000000000000n)
