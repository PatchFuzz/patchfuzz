function print(a) {
    if (!a)
        throw new Error("Bad assertion");
}

assert.sameValue = function (input, expected, message) {
    if (input !== expected)
        throw new Error(message);
}

print(0b00n & 0b00n, 0b00n, "0b00n & 0b00n === 0b00n");
print(0b00n & 0b01n, 0b00n, "0b00n & 0b01n === 0b00n");
print(0b01n & 0b00n, 0b00n, "0b01n & 0b00n === 0b00n");
print(0b00n & 0b10n, 0b00n, "0b00n & 0b10n === 0b00n");
print(0b10n & 0b00n, 0b00n, "0b10n & 0b00n === 0b00n");
print(0b00n & 0b11n, 0b00n, "0b00n & 0b11n === 0b00n");
print(0b11n & 0b00n, 0b00n, "0b11n & 0b00n === 0b00n");
print(0b01n & 0b01n, 0b01n, "0b01n & 0b01n === 0b01n");
print(0b01n & 0b10n, 0b00n, "0b01n & 0b10n === 0b00n");
print(0b10n & 0b01n, 0b00n, "0b10n & 0b01n === 0b00n");
print(0b01n & 0b11n, 0b01n, "0b01n & 0b11n === 0b01n");
print(0b11n & 0b01n, 0b01n, "0b11n & 0b01n === 0b01n");
print(0b10n & 0b10n, 0b10n, "0b10n & 0b10n === 0b10n");
print(0b10n & 0b11n, 0b10n, "0b10n & 0b11n === 0b10n");
print(0b11n & 0b10n, 0b10n, "0b11n & 0b10n === 0b10n");
print(0xffffffffn & 0n, 0n, "0xffffffffn & 0n === 0n");
print(0n & 0xffffffffn, 0n, "0n & 0xffffffffn === 0n");
print(0xffffffffn & 0xffffffffn, 0xffffffffn, "0xffffffffn & 0xffffffffn === 0xffffffffn");
print(0xffffffffffffffffn & 0n, 0n, "0xffffffffffffffffn & 0n === 0n");
print(0n & 0xffffffffffffffffn, 0n, "0n & 0xffffffffffffffffn === 0n");
print(0xffffffffffffffffn & 0xffffffffn, 0xffffffffn, "0xffffffffffffffffn & 0xffffffffn === 0xffffffffn");
print(0xffffffffn & 0xffffffffffffffffn, 0xffffffffn, "0xffffffffn & 0xffffffffffffffffn === 0xffffffffn");
print(
  0xffffffffffffffffn & 0xffffffffffffffffn, 0xffffffffffffffffn,
  "0xffffffffffffffffn & 0xffffffffffffffffn === 0xffffffffffffffffn");
print(
  0xbf2ed51ff75d380fd3be813ec6185780n & 0x4aabef2324cedff5387f1f65n, 0x42092803008e813400181700n,
  "0xbf2ed51ff75d380fd3be813ec6185780n & 0x4aabef2324cedff5387f1f65n === 0x42092803008e813400181700n");
print(
  0x4aabef2324cedff5387f1f65n & 0xbf2ed51ff75d380fd3be813ec6185780n, 0x42092803008e813400181700n,
  "0x4aabef2324cedff5387f1f65n & 0xbf2ed51ff75d380fd3be813ec6185780n === 0x42092803008e813400181700n");
print(0n & -1n, 0n, "0n & -1n === 0n");
print(-1n & 0n, 0n, "-1n & 0n === 0n");
print(0n & -2n, 0n, "0n & -2n === 0n");
print(-2n & 0n, 0n, "-2n & 0n === 0n");
print(1n & -2n, 0n, "1n & -2n === 0n");
print(-2n & 1n, 0n, "-2n & 1n === 0n");
print(2n & -2n, 2n, "2n & -2n === 2n");
print(-2n & 2n, 2n, "-2n & 2n === 2n");
print(2n & -3n, 0n, "2n & -3n === 0n");
print(-3n & 2n, 0n, "-3n & 2n === 0n");
print(-1n & -2n, -2n, "-1n & -2n === -2n");
print(-2n & -1n, -2n, "-2n & -1n === -2n");
print(-2n & -2n, -2n, "-2n & -2n === -2n");
print(-2n & -3n, -4n, "-2n & -3n === -4n");
print(-3n & -2n, -4n, "-3n & -2n === -4n");
print(0xffffffffn & -1n, 0xffffffffn, "0xffffffffn & -1n === 0xffffffffn");
print(-1n & 0xffffffffn, 0xffffffffn, "-1n & 0xffffffffn === 0xffffffffn");
print(0xffffffffffffffffn & -1n, 0xffffffffffffffffn, "0xffffffffffffffffn & -1n === 0xffffffffffffffffn");
print(-1n & 0xffffffffffffffffn, 0xffffffffffffffffn, "-1n & 0xffffffffffffffffn === 0xffffffffffffffffn");
print(
  0xbf2ed51ff75d380fd3be813ec6185780n & -0x4aabef2324cedff5387f1f65n, 0xbf2ed51fb554100cd330000ac6004080n,
  "0xbf2ed51ff75d380fd3be813ec6185780n & -0x4aabef2324cedff5387f1f65n === 0xbf2ed51fb554100cd330000ac6004080n");
print(
  -0x4aabef2324cedff5387f1f65n & 0xbf2ed51ff75d380fd3be813ec6185780n, 0xbf2ed51fb554100cd330000ac6004080n,
  "-0x4aabef2324cedff5387f1f65n & 0xbf2ed51ff75d380fd3be813ec6185780n === 0xbf2ed51fb554100cd330000ac6004080n");
print(
  -0xbf2ed51ff75d380fd3be813ec6185780n & 0x4aabef2324cedff5387f1f65n, 0x8a2c72024405ec138670800n,
  "-0xbf2ed51ff75d380fd3be813ec6185780n & 0x4aabef2324cedff5387f1f65n === 0x8a2c72024405ec138670800n");
print(
  0x4aabef2324cedff5387f1f65n & -0xbf2ed51ff75d380fd3be813ec6185780n, 0x8a2c72024405ec138670800n,
  "0x4aabef2324cedff5387f1f65n & -0xbf2ed51ff75d380fd3be813ec6185780n === 0x8a2c72024405ec138670800n");
print(
  -0xbf2ed51ff75d380fd3be813ec6185780n & -0x4aabef2324cedff5387f1f65n, -0xbf2ed51fffffff2ff7fedffffe7f5f80n,
  "-0xbf2ed51ff75d380fd3be813ec6185780n & -0x4aabef2324cedff5387f1f65n === -0xbf2ed51fffffff2ff7fedffffe7f5f80n");
print(
  -0x4aabef2324cedff5387f1f65n & -0xbf2ed51ff75d380fd3be813ec6185780n, -0xbf2ed51fffffff2ff7fedffffe7f5f80n,
  "-0x4aabef2324cedff5387f1f65n & -0xbf2ed51ff75d380fd3be813ec6185780n === -0xbf2ed51fffffff2ff7fedffffe7f5f80n");
print(-0xffffffffn & 0n, 0n, "-0xffffffffn & 0n === 0n");
print(0n & -0xffffffffn, 0n, "0n & -0xffffffffn === 0n");
print(
  -0xffffffffffffffffn & 0x10000000000000000n, 0x10000000000000000n,
  "-0xffffffffffffffffn & 0x10000000000000000n === 0x10000000000000000n");
print(
  0x10000000000000000n & -0xffffffffffffffffn, 0x10000000000000000n,
  "0x10000000000000000n & -0xffffffffffffffffn === 0x10000000000000000n");
print(
  -0xffffffffffffffffffffffffn & 0x10000000000000000n, 0n,
  "-0xffffffffffffffffffffffffn & 0x10000000000000000n === 0n");
print(
  0x10000000000000000n & -0xffffffffffffffffffffffffn, 0n,
  "0x10000000000000000n & -0xffffffffffffffffffffffffn === 0n");
