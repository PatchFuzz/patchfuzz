function print(condition) {
    if (!condition)
        throw new Error("assertion failed");
}

function test(i) {
    let foo = {};
    foo["bar" + i] = 1;
    print(foo["bar" + i] === 1)
    print(delete foo["bar" + i]);
    print(!("bar" + i in foo));
}

for (let i = 0; i < testLoopCount; ++i)
    test(i);
