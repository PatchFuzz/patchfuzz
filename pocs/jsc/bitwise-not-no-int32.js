function print(a, e, m) {
    if (a !== e)
        throw new Error("Expected to be: " + e + " but got: " + a);
}

function bitNot(a) {
    return ~a;
}
noInline(bitNot);

for (let i = 0; i < testLoopCount; i++) {
    let r = bitNot("0");
    print(r, -1);
    r = bitNot("1");
    print(r, -2);
    r = bitNot("-1");
    print(r, 0);
    r = bitNot("-2");
    print(r, 1);

    r = bitNot({ valueOf: () => 0 });
    print(r, -1);
    r = bitNot({ valueOf: () => 1 });
    print(r, -2);
    r = bitNot({ valueOf: () => -1 });
    print(r, 0);
    r = bitNot({ valueOf: () => -2 });
    print(r, 1);
}

