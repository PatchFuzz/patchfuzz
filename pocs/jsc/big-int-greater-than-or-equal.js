function print(v, e, m) {
    if (v !== e)
        throw new Error(m);
}

print(0n >= 0n, true, "0n >= 0n");
print(1n >= 1n, true, "1n >= 1n");
print(BigInt("-1") >= BigInt("-1"), true, "-1n >= -1n");
print(0n >= BigInt("-0"), true, "0n >= -0n");
print(BigInt("-0") >= 0n, true, "-0n >= 0n");
print(0n >= 1n, false, "0n >= 1n");
print(1n >= 0n, true, "1n >= 0n");
print(0n >= BigInt("-1"), true, "0n >= -1n");
print(BigInt("-1") >= 0n, false, "-1n >= 0n");
print(1n >= BigInt("-1"), true, "1n >= -1n");
print(BigInt("-1") >= 1n, false, "-1n >= 1n");
print(0x1fffffffffffff01n >= 0x1fffffffffffff02n, false, "0x1fffffffffffff01n >= 0x1fffffffffffff02n");
print(0x1fffffffffffff02n >= 0x1fffffffffffff01n, true, "0x1fffffffffffff02n >= 0x1fffffffffffff01n");
print(BigInt("-2305843009213693697") >= BigInt("-2305843009213693698"), true, "-2305843009213693697n >= -2305843009213693698n");
print(BigInt("-2305843009213693698") >= BigInt("-2305843009213693697"), false, "-2305843009213693698n >= -2305843009213693697n");
print(0x10000000000000000n >= 0n, true, "0x10000000000000000n >= 0n");
print(0n >= 0x10000000000000000n, false, "0n >= 0x10000000000000000n");
print(0x10000000000000000n >= 1n, true, "0x10000000000000000n >= 1n");
print(1n >= 0x10000000000000000n, false, "1n >= 0x10000000000000000n");
print(0x10000000000000000n >= BigInt("-1"), true, "0x10000000000000000n >= -1n");
print(BigInt("-1") >= 0x10000000000000000n, false, "-1n >= 0x10000000000000000n");
print(0x10000000000000001n >= 0n, true, "0x10000000000000001n >= 0n");
print(0n >= 0x10000000000000001n, false, "0n >= 0x10000000000000001n");
print(BigInt("-18446744073709551616") >= 0n, false, "-18446744073709551616n >= 0n");
print(0n >= BigInt("-18446744073709551616"), true, "0n >= -18446744073709551616n");
print(BigInt("-18446744073709551616") >= 1n, false, "-18446744073709551616n >= 1n");
print(1n >= BigInt("-18446744073709551616"), true, "1n >= -18446744073709551616n");
print(BigInt("-18446744073709551616") >= BigInt("-1"), false, "-18446744073709551616n >= -1n");
print(BigInt("-1") >= BigInt("-18446744073709551616"), true, "-1n >= -18446744073709551616n");
print(BigInt("-18446744073709551617") >= 0n, false, "-18446744073709551617n >= 0n");
print(0n >= BigInt("-18446744073709551617"), true, "0n >= -18446744073709551617n");
print(0x10000000000000000n >= 0x100000000n, true, "0x10000000000000000n >= 0x100000000n");
print(0x100000000n >= 0x10000000000000000n, false, "0x100000000n >= 0x10000000000000000n");



print(0n >= "0", true, "0n >= '0'");
print("0" >= 0n, true, "'0' >= 0n");
print(0n >= "1", false, "0n >= '1'");
print("0" >= 1n, false, "'0' >= 1n");
print(1n >= "0", true, "1n >= '0'");
print("1" >= 0n, true, "'1' >= 0n");
print(0n >= "", true, "0n >= ''");
print("" >= 0n, true, "'' >= 0n");
print(0n >= "1", false, "0n >= '1'");
print("" >= 1n, false, "'' >= 1n");
print(1n >= "", true, "1n >= ''");
print(1n >= "1", true, "1n >= '1'");
print("1" >= 1n, true, "'1' >= 1n");
print(1n >= "-1", true, "1n >= '-1'");
print("1" >= BigInt("-1"), true, "'1' >= -1n");
print(BigInt("-1") >= "1", false, "-1n >= '1'");
print("-1" >= 1n, false, "'-1' >= 1n");
print(BigInt("-1") >= "-1", true, "-1n >= '-1'");
print("-1" >= BigInt("-1"), true, "'-1' >= -1n");
print(9007199254740993n >= "9007199254740992", true, "9007199254740993n >= '9007199254740992'");
print("9007199254740993" >= 9007199254740992n, true, "'9007199254740993' >= 9007199254740992n");
print(BigInt("-9007199254740992") >= "-9007199254740993", true, "-9007199254740992n >= '-9007199254740993'");
print("-9007199254740992" >= BigInt("-9007199254740993"), true, "'-9007199254740992' >= -9007199254740993n");
print("0x10" >= 14n, true, "'0x10' >= 3n");
print("0b10" >= 2n, true, "'0b10' >= 2n");
print("0b10" >= 1n, true, "'0b10' >= 1n");



print("b10" >= 2n, false, "'b10' >= 2n");
print("bbb10" >= 2n, false, "'bbb10' >= 2n");



print(0n >= 0, true, "0n >= 0");
print(0 >= 0n, true, "0 >= 0n");
print(0n >= -0, true, "0n >= -0");
print(-0 >= 0n, true, "-0 >= 0n");
print(0n >= 0.000000000001, false, "0n >= 0.000000000001");
print(0.000000000001 >= 0n, true, "0.000000000001 >= 0n");
print(0n >= 1, false, "0n >= 1");
print(1 >= 0n, true, "1 >= 0n");
print(1n >= 0, true, "1n >= 0");
print(0 >= 1n, false, "0 >= 1n");
print(1n >= 0.999999999999, true, "1n >= 0.999999999999");
print(0.999999999999 >= 1n, false, "0.999999999999 >= 1n");
print(1n >= 1, true, "1n >= 1");
print(1 >= 1n, true, "1 >= 1n");
print(0n >= Number.MIN_VALUE, false, "0n >= Number.MIN_VALUE");
print(Number.MIN_VALUE >= 0n, true, "Number.MIN_VALUE >= 0n");
print(0n >= -Number.MIN_VALUE, true, "0n >= -Number.MIN_VALUE");
print(-Number.MIN_VALUE >= 0n, false, "-Number.MIN_VALUE >= 0n");
print(BigInt("-10") >= Number.MIN_VALUE, false, "-10n >= Number.MIN_VALUE");
print(Number.MIN_VALUE >= BigInt("-10"), true, "Number.MIN_VALUE >= -10n");
print(1n >= Number.MAX_VALUE, false, "1n >= Number.MAX_VALUE");
print(Number.MAX_VALUE >= 1n, true, "Number.MAX_VALUE >= 1n");
print(1n >= -Number.MAX_VALUE, true, "1n >= -Number.MAX_VALUE");
print(-Number.MAX_VALUE >= 1n, false, "-Number.MAX_VALUE >= 1n");
print(0xfffffffffffff7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffn >= Number.MAX_VALUE, false, "0xfffffffffffff7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffn >= Number.MAX_VALUE");
print(Number.MAX_VALUE >= 0xfffffffffffff7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffn, true, "Number.MAX_VALUE >= 0xfffffffffffff7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffn");
print(0xfffffffffffff800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001n >= Number.MAX_VALUE, true, "0xfffffffffffff800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001n >= Number.MAX_VALUE");
print(Number.MAX_VALUE >= 0xfffffffffffff800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001n, false, "Number.MAX_VALUE >= 0xfffffffffffff800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001n");
print(1n >= Infinity, false, "1n >= Infinity");
print(Infinity >= 1n, true, "Infinity >= 1n");
print(BigInt("-1") >= Infinity, false, "-1n >= Infinity");
print(Infinity >= BigInt("-1"), true, "Infinity >= -1n");
print(1n >= -Infinity, true, "1n >= -Infinity");
print(-Infinity >= 1n, false, "-Infinity >= 1n");
print(BigInt("-1") >= -Infinity, true, "-1n >= -Infinity");
print(-Infinity >= BigInt("-1"), false, "-Infinity >= -1n");
print(0n >= NaN, false, "0n >= NaN");
print(NaN >= 0n, false, "NaN >= 0n");



print(false >= 1n, false, "false >= 1n");
print(1n >= false, true, "1n >= false");
print(false >= 0n, true, "false >= 0n");
print(0n >= false, true, "0n >= false");
print(true >= 1n, true, "true >= 1n");
print(1n >= true, true, "1n >= true");
print(true >= 2n, false, "true >= 2n");
print(2n >= true, true, "2n >= true");



try {
    1n >= Symbol("1");
    print(false, true, "Comparison with Symbol shoud throw TypeError, but executed without exception");
} catch(e) {
    print(e instanceof TypeError, true, "Comparison with Symbol shoud throw TypeError, but throwed something else");
}

