typedArrays = [BigInt64Array, BigUint64Array];

function print(cond) {
    if (!cond)
        throw new Error("bad assertion!");
}

function foo() {
    for (constructor of typedArrays) {
        let a = new constructor(10);
        let b = Object.getOwnPropertyDescriptor(a, 0);
        print(b.value === 0n);
        print(b.writable === true);
        print(b.enumerable === true);
        print(b.configurable === true);
    }
}

for (let i = 0; i < 100; i++)
    foo();
