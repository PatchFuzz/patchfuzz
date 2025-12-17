;

print(BigInt.asUintN(32, -1n), 0xffffffffn);
print(() => BigInt.asUintN(2**32 - 1, -1n), RangeError);
print(() => BigInt.asUintN(2**32, -1n), RangeError);
print(() => BigInt.asUintN(2**53 - 1, -1n), RangeError);
