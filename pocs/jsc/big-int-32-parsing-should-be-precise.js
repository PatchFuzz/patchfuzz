function print(b) {
    if (!b)
        throw new Error;
}

function print(arg) {
    if (useBigInt32())
        print(isBigInt32(arg));
    else
        print(isHeapBigInt(arg));
}

print(2147483647n);
print(2147483646n);
print(2127483646n);
print(1127483646n);
print(-2147483648n);
print(-2147483647n);
print(-1147483647n);
print(0n);
print(1n);
print(-1n);
print(42n);

print(isHeapBigInt(2147483648n));
print(isHeapBigInt(-2147483649n));
print(isHeapBigInt(3147483648n));
print(isHeapBigInt(9147483648n));
print(isHeapBigInt(-9147483649n));
print(isHeapBigInt(-2147583649n));
