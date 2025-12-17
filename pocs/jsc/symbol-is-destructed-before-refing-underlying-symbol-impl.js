function foo(a) {
    a[Symbol()] = 1;
}
noInline(foo);

for (let i = 0; i < 1e7; i++) {
    let a = {};
    foo(a);
}
