


function assert(a) {
    if (!a)
        throw new Error("Bad assertion");
}

assert.sameValue = function (input, expected, message) {
    if (input !== expected)
        throw new Error(message);
}

assert.sameValue(0b00n ^ 0b00n, 0b00n, "0b00n ^ 0b00n === 0b00n");
assert.sameValue(0b00n ^ 0b01n, 0b01n, "0b00n ^ 0b01n === 0b01n");
assert.sameValue(0b01n ^ 0b00n, 0b01n, "0b01n ^ 0b00n === 0b01n");
assert.sameValue(0b00n ^ 0b10n, 0b10n, "0b00n ^ 0b10n === 0b10n");
assert.sameValue(0b10n ^ 0b00n, 0b10n, "0b10n ^ 0b00n === 0b10n");
assert.sameValue(0b00n ^ 0b11n, 0b11n, "0b00n ^ 0b11n === 0b11n");
assert.sameValue(0b11n ^ 0b00n, 0b11n, "0b11n ^ 0b00n === 0b11n");
assert.sameValue(0b01n ^ 0b01n, 0b00n, "0b01n ^ 0b01n === 0b00n");
assert.sameValue(0b01n ^ 0b10n, 0b11n, "0b01n ^ 0b10n === 0b11n");
assert.sameValue(0b10n ^ 0b01n, 0b11n, "0b10n ^ 0b01n === 0b11n");
assert.sameValue(0b01n ^ 0b11n, 0b10n, "0b01n ^ 0b11n === 0b10n");
assert.sameValue(0b11n ^ 0b01n, 0b10n, "0b11n ^ 0b01n === 0b10n");
assert.sameValue(0b10n ^ 0b10n, 0b00n, "0b10n ^ 0b10n === 0b00n");
assert.sameValue(0b10n ^ 0b11n, 0b01n, "0b10n ^ 0b11n === 0b01n");
assert.sameValue(0b11n ^ 0b10n, 0b01n, "0b11n ^ 0b10n === 0b01n");
assert.sameValue(0xffffffffn ^ 0n, 0xffffffffn, "0xffffffffn ^ 0n === 0xffffffffn");
assert.sameValue(0n ^ 0xffffffffn, 0xffffffffn, "0n ^ 0xffffffffn === 0xffffffffn");
assert.sameValue(0xffffffffn ^ 0xffffffffn, 0n, "0xffffffffn ^ 0xffffffffn === 0n");
assert.sameValue(0xffffffffffffffffn ^ 0n, 0xffffffffffffffffn, "0xffffffffffffffffn ^ 0n === 0xffffffffffffffffn");
assert.sameValue(0n ^ 0xffffffffffffffffn, 0xffffffffffffffffn, "0n ^ 0xffffffffffffffffn === 0xffffffffffffffffn");
assert.sameValue(0xffffffffffffffffn ^ 0xffffffffn, 0xffffffff00000000n, "0xffffffffffffffffn ^ 0xffffffffn === 0xffffffff00000000n");
assert.sameValue(0xffffffffn ^ 0xffffffffffffffffn, 0xffffffff00000000n, "0xffffffffn ^ 0xffffffffffffffffn === 0xffffffff00000000n");
assert.sameValue(
  0xffffffffffffffffn ^ 0xffffffffffffffffn, 0n,
  "0xffffffffffffffffn ^ 0xffffffffffffffffn === 0n");
assert.sameValue(
  0xbf2ed51ff75d380fd3be813ec6185780n ^ 0x4aabef2324cedff5387f1f65n, 0xbf2ed51fbdf6d72cf7705ecbfe6748e5n,
  "0xbf2ed51ff75d380fd3be813ec6185780n ^ 0x4aabef2324cedff5387f1f65n === 0xbf2ed51fbdf6d72cf7705ecbfe6748e5n");
assert.sameValue(
  0x4aabef2324cedff5387f1f65n ^ 0xbf2ed51ff75d380fd3be813ec6185780n, 0xbf2ed51fbdf6d72cf7705ecbfe6748e5n,
  "0x4aabef2324cedff5387f1f65n ^ 0xbf2ed51ff75d380fd3be813ec6185780n === 0xbf2ed51fbdf6d72cf7705ecbfe6748e5n");
assert.sameValue(0n ^ -1n, -1n, "0n ^ -1n === -1n");
assert.sameValue(-1n ^ 0n, -1n, "-1n ^ 0n === -1n");
assert.sameValue(0n ^ -2n, -2n, "0n ^ -2n === -2n");
assert.sameValue(-2n ^ 0n, -2n, "-2n ^ 0n === -2n");
assert.sameValue(1n ^ -2n, -1n, "1n ^ -2n === -1n");
assert.sameValue(-2n ^ 1n, -1n, "-2n ^ 1n === -1n");
assert.sameValue(2n ^ -2n, -4n, "2n ^ -2n === -4n");
assert.sameValue(-2n ^ 2n, -4n, "-2n ^ 2n === -4n");
assert.sameValue(2n ^ -3n, -1n, "2n ^ -3n === -1n");
assert.sameValue(-3n ^ 2n, -1n, "-3n ^ 2n === -1n");
assert.sameValue(-1n ^ -2n, 1n, "-1n ^ -2n === 1n");
assert.sameValue(-2n ^ -1n, 1n, "-2n ^ -1n === 1n");
assert.sameValue(-2n ^ -2n, 0n, "-2n ^ -2n === 0n");
assert.sameValue(-2n ^ -3n, 3n, "-2n ^ -3n === 3n");
assert.sameValue(-3n ^ -2n, 3n, "-3n ^ -2n === 3n");
assert.sameValue(0xffffffffn ^ -1n, -0x100000000n, "0xffffffffn ^ -1n === -0x100000000n");
assert.sameValue(-1n ^ 0xffffffffn, -0x100000000n, "-1n ^ 0xffffffffn === -0x100000000n");
assert.sameValue(0xffffffffffffffffn ^ -1n, -0x10000000000000000n, "0xffffffffffffffffn ^ -1n === -0x10000000000000000n");
assert.sameValue(-1n ^ 0xffffffffffffffffn, -0x10000000000000000n, "-1n ^ 0xffffffffffffffffn === -0x10000000000000000n");
assert.sameValue(
  0xbf2ed51ff75d380fd3be813ec6185780n ^ -0x4aabef2324cedff5387f1f65n, -0xbf2ed51fbdf6d72cf7705ecbfe6748e5n,
  "0xbf2ed51ff75d380fd3be813ec6185780n ^ -0x4aabef2324cedff5387f1f65n === -0xbf2ed51fbdf6d72cf7705ecbfe6748e5n");
assert.sameValue(
  -0x4aabef2324cedff5387f1f65n ^ 0xbf2ed51ff75d380fd3be813ec6185780n, -0xbf2ed51fbdf6d72cf7705ecbfe6748e5n,
  "-0x4aabef2324cedff5387f1f65n ^ 0xbf2ed51ff75d380fd3be813ec6185780n === -0xbf2ed51fbdf6d72cf7705ecbfe6748e5n");
assert.sameValue(
  -0xbf2ed51ff75d380fd3be813ec6185780n ^ 0x4aabef2324cedff5387f1f65n, -0xbf2ed51fbdf6d72cf7705ecbfe67481bn,
  "-0xbf2ed51ff75d380fd3be813ec6185780n ^ 0x4aabef2324cedff5387f1f65n === -0xbf2ed51fbdf6d72cf7705ecbfe67481bn");
assert.sameValue(
  0x4aabef2324cedff5387f1f65n ^ -0xbf2ed51ff75d380fd3be813ec6185780n, -0xbf2ed51fbdf6d72cf7705ecbfe67481bn,
  "0x4aabef2324cedff5387f1f65n ^ -0xbf2ed51ff75d380fd3be813ec6185780n === -0xbf2ed51fbdf6d72cf7705ecbfe67481bn");
assert.sameValue(
  -0xbf2ed51ff75d380fd3be813ec6185780n ^ -0x4aabef2324cedff5387f1f65n, 0xbf2ed51fbdf6d72cf7705ecbfe67481bn,
  "-0xbf2ed51ff75d380fd3be813ec6185780n ^ -0x4aabef2324cedff5387f1f65n === 0xbf2ed51fbdf6d72cf7705ecbfe67481bn");
assert.sameValue(
  -0x4aabef2324cedff5387f1f65n ^ -0xbf2ed51ff75d380fd3be813ec6185780n, 0xbf2ed51fbdf6d72cf7705ecbfe67481bn,
  "-0x4aabef2324cedff5387f1f65n ^ -0xbf2ed51ff75d380fd3be813ec6185780n === 0xbf2ed51fbdf6d72cf7705ecbfe67481bn");
assert.sameValue(-0xffffffffn ^ 0n, -0xffffffffn, "-0xffffffffn ^ 0n === -0xffffffffn");
assert.sameValue(0n ^ -0xffffffffn, -0xffffffffn, "0n ^ -0xffffffffn === -0xffffffffn");
assert.sameValue(
  -0xffffffffffffffffn ^ 0x10000000000000000n, -0x1ffffffffffffffffn,
  "-0xffffffffffffffffn ^ 0x10000000000000000n === -0x1ffffffffffffffffn");
assert.sameValue(
  0x10000000000000000n ^ -0xffffffffffffffffn, -0x1ffffffffffffffffn,
  "0x10000000000000000n ^ -0xffffffffffffffffn === -0x1ffffffffffffffffn");
assert.sameValue(
  -0xffffffffffffffffffffffffn ^ 0x10000000000000000n, -0xfffffffeffffffffffffffffn,
  "-0xffffffffffffffffffffffffn ^ 0x10000000000000000n === -0xfffffffeffffffffffffffffn");
assert.sameValue(
  0x10000000000000000n ^ -0xffffffffffffffffffffffffn, -0xfffffffeffffffffffffffffn,
  "0x10000000000000000n ^ -0xffffffffffffffffffffffffn === -0xfffffffeffffffffffffffffn");
