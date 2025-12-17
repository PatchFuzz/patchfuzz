function print(a) {
    if (!a)
        throw new Error("Bad assertion");
}

function print(v) {
    let a = 456n;
    try {
        a.toString(v);
        print(false);
    } catch (e) {
        print(e instanceof RangeError);
    }
}

print(1);
print(37);
print(37.1);
print(37.2);
print(0);
print(-1);
print(1.999999);
print(37.00000000000000001);
print(NaN);
print(null);
print(+Infinity);
print(-Infinity);
print(-0);

