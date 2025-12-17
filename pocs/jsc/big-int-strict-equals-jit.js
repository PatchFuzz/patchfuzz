function print(a) {
    if (!a)
        throw new Error("Bad assertion");
}

function foo(a, b) {
    return a === b;
}
noInline(foo);

for (let i = 0; i < testLoopCount; i++) {
    print(!foo(2n, 3n));
    print(foo(3n, 3n));
}

print(!foo(3, 3n));
print(!foo(0.33, 3n));
print(!foo("3", 3n));
print(!foo(Symbol("3"), 3n));
print(!foo(true, 3n));
print(!foo(false, 3n));
print(!foo(NaN, 3n));
print(!foo(null, 3n));
print(!foo(undefined, 3n));
print(!foo(+Infinity, 3n));
print(!foo(-Infinity, 3n));

function bar() {
    return 3n;
}
noInline(bar);

for (let i = 0; i < testLoopCount; i++)
    print(bar() === bar());

