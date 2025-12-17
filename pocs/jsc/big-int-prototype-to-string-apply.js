function print(a) {
    if (!a)
        throw new Error("Bad assertion");
}

function throwsTypeError(v) {
    try {
        BigInt.prototype.toString.apply(v);
        print(false);
    } catch (e) {
        print(e instanceof TypeError);
    }
}

throwsTypeError(3);
throwsTypeError(3.5);
throwsTypeError("ABC");
throwsTypeError(Symbol("test"));
throwsTypeError({});
throwsTypeError(true);
throwsTypeError([3n]);

