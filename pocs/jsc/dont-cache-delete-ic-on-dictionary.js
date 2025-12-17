function print(b) {
    if (!b)
        throw new Error;
}

function foo(i) {
    Object.defineProperty(Reflect, "get", {});
    for (let i = 0; i < 2; i++) {
        delete Reflect.get;
    }
}

for (let i=0; i<100; i++) {
    foo(i);
}
