function print(a) {
    if (!a)
        throw new Error("Bad assertion");
}

assert.sameValue = function (input, expected, message) {
    if (input !== expected)
        throw new Error(message);
}

print(0b00n | 0b00n, 0b00n, "0b00n | 0b00n === 0b00n");
print(0b00n | 0b01n, 0b01n, "0b00n | 0b01n === 0b01n");
print(0b01n | 0b00n, 0b01n, "0b01n | 0b00n === 0b01n");
print(0b00n | 0b10n, 0b10n, "0b00n | 0b10n === 0b10n");
print(0b10n | 0b00n, 0b10n, "0b10n | 0b00n === 0b10n");
print(0b00n | 0b11n, 0b11n, "0b00n | 0b11n === 0b11n");
print(0b11n | 0b00n, 0b11n, "0b11n | 0b00n === 0b11n");
print(0b01n | 0b01n, 0b01n, "0b01n | 0b01n === 0b01n");
print(0b01n | 0b10n, 0b11n, "0b01n | 0b10n === 0b11n");
print(0b10n | 0b01n, 0b11n, "0b10n | 0b01n === 0b11n");
print(0b01n | 0b11n, 0b11n, "0b01n | 0b11n === 0b11n");
print(0b11n | 0b01n, 0b11n, "0b11n | 0b01n === 0b11n");
print(0b10n | 0b10n, 0b10n, "0b10n | 0b10n === 0b10n");
print(0b10n | 0b11n, 0b11n, "0b10n | 0b11n === 0b11n");
print(0b11n | 0b10n, 0b11n, "0b11n | 0b10n === 0b11n");
print(0xffffffffn | 0n, 0xffffffffn, "0xffffffffn | 0n === 0xffffffffn");
print(0n | 0xffffffffn, 0xffffffffn, "0n | 0xffffffffn === 0xffffffffn");
print(0xffffffffn | 0xffffffffn, 0xffffffffn, "0xffffffffn | 0xffffffffn === 0xffffffffn");
print(0xffffffffffffffffn | 0n, 0xffffffffffffffffn, "0xffffffffffffffffn | 0n === 0xffffffffffffffffn");
print(0n | 0xffffffffffffffffn, 0xffffffffffffffffn, "0n | 0xffffffffffffffffn === 0xffffffffffffffffn");
print(0xffffffffffffffffn | 0xffffffffn, 0xffffffffffffffffn, "0xffffffffffffffffn | 0xffffffffn === 0xffffffffffffffffn");
print(0xffffffffn | 0xffffffffffffffffn, 0xffffffffffffffffn, "0xffffffffn | 0xffffffffffffffffn === 0xffffffffffffffffn");
print(
  0xffffffffffffffffn | 0xffffffffffffffffn, 0xffffffffffffffffn,
  "0xffffffffffffffffn | 0xffffffffffffffffn === 0xffffffffffffffffn");
print(
  0xbf2ed51ff75d380fd3be813ec6185780n | 0x4aabef2324cedff5387f1f65n, 0xbf2ed51fffffff2ff7fedffffe7f5fe5n,
  "0xbf2ed51ff75d380fd3be813ec6185780n | 0x4aabef2324cedff5387f1f65n === 0xbf2ed51fffffff2ff7fedffffe7f5fe5n");
print(
  0x4aabef2324cedff5387f1f65n | 0xbf2ed51ff75d380fd3be813ec6185780n, 0xbf2ed51fffffff2ff7fedffffe7f5fe5n,
  "0x4aabef2324cedff5387f1f65n | 0xbf2ed51ff75d380fd3be813ec6185780n === 0xbf2ed51fffffff2ff7fedffffe7f5fe5n");
print(0n | -1n, -1n, "0n | -1n === -1n");
print(-1n | 0n, -1n, "-1n | 0n === -1n");
print(0n | -2n, -2n, "0n | -2n === -2n");
print(-2n | 0n, -2n, "-2n | 0n === -2n");
print(1n | -2n, -1n, "1n | -2n === -1n");
print(-2n | 1n, -1n, "-2n | 1n === -1n");
print(2n | -2n, -2n, "2n | -2n === -2n");
print(-2n | 2n, -2n, "-2n | 2n === -2n");
print(2n | -3n, -1n, "2n | -3n === -1n");
print(-3n | 2n, -1n, "-3n | 2n === -1n");
print(-1n | -2n, -1n, "-1n | -2n === -1n");
print(-2n | -1n, -1n, "-2n | -1n === -1n");
print(-2n | -2n, -2n, "-2n | -2n === -2n");
print(-2n | -3n, -1n, "-2n | -3n === -1n");
print(-3n | -2n, -1n, "-3n | -2n === -1n");
print(0xffffffffn | -1n, -1n, "0xffffffffn | -1n === -1n");
print(-1n | 0xffffffffn, -1n, "-1n | 0xffffffffn === -1n");
print(0xffffffffffffffffn | -1n, -1n, "0xffffffffffffffffn | -1n === -1n");
print(-1n | 0xffffffffffffffffn, -1n, "-1n | 0xffffffffffffffffn === -1n");
print(
  0xbf2ed51ff75d380fd3be813ec6185780n | -0x4aabef2324cedff5387f1f65n, -0x8a2c72024405ec138670865n,
  "0xbf2ed51ff75d380fd3be813ec6185780n | -0x4aabef2324cedff5387f1f65n === -0x8a2c72024405ec138670865n");
print(
  -0x4aabef2324cedff5387f1f65n | 0xbf2ed51ff75d380fd3be813ec6185780n, -0x8a2c72024405ec138670865n,
  "-0x4aabef2324cedff5387f1f65n | 0xbf2ed51ff75d380fd3be813ec6185780n === -0x8a2c72024405ec138670865n");
print(
  -0xbf2ed51ff75d380fd3be813ec6185780n | 0x4aabef2324cedff5387f1f65n, -0xbf2ed51fb554100cd330000ac600401bn,
  "-0xbf2ed51ff75d380fd3be813ec6185780n | 0x4aabef2324cedff5387f1f65n === -0xbf2ed51fb554100cd330000ac600401bn");
print(
  0x4aabef2324cedff5387f1f65n | -0xbf2ed51ff75d380fd3be813ec6185780n, -0xbf2ed51fb554100cd330000ac600401bn,
  "0x4aabef2324cedff5387f1f65n | -0xbf2ed51ff75d380fd3be813ec6185780n === -0xbf2ed51fb554100cd330000ac600401bn");
print(
  -0xbf2ed51ff75d380fd3be813ec6185780n | -0x4aabef2324cedff5387f1f65n, -0x42092803008e813400181765n,
  "-0xbf2ed51ff75d380fd3be813ec6185780n | -0x4aabef2324cedff5387f1f65n === -0x42092803008e813400181765n");
print(
  -0x4aabef2324cedff5387f1f65n | -0xbf2ed51ff75d380fd3be813ec6185780n, -0x42092803008e813400181765n,
  "-0x4aabef2324cedff5387f1f65n | -0xbf2ed51ff75d380fd3be813ec6185780n === -0x42092803008e813400181765n");
print(-0xffffffffn | 0n, -0xffffffffn, "-0xffffffffn | 0n === -0xffffffffn");
print(0n | -0xffffffffn, -0xffffffffn, "0n | -0xffffffffn === -0xffffffffn");
print(
  -0xffffffffffffffffn | 0x10000000000000000n, -0xffffffffffffffffn,
  "-0xffffffffffffffffn | 0x10000000000000000n === -0xffffffffffffffffn");
print(
  0x10000000000000000n | -0xffffffffffffffffn, -0xffffffffffffffffn,
  "0x10000000000000000n | -0xffffffffffffffffn === -0xffffffffffffffffn");
print(
  -0xffffffffffffffffffffffffn | 0x10000000000000000n, -0xfffffffeffffffffffffffffn,
  "-0xffffffffffffffffffffffffn | 0x10000000000000000n === -0xfffffffeffffffffffffffffn");
print(
  0x10000000000000000n | -0xffffffffffffffffffffffffn, -0xfffffffeffffffffffffffffn,
  "0x10000000000000000n | -0xffffffffffffffffffffffffn === -0xfffffffeffffffffffffffffn");

