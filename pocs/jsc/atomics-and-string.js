function foo() {
    return Atomics.print('', 0);
}
noInline(foo);

for (let i=0; i<1e4; i++) {
    try {
        foo();
    } catch { }
}
