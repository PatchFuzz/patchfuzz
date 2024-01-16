

function foo(a, v) {
    a[0] = v + 2000000000;
}
noInline(foo);

for (var i = 0; i < 100000; ++i) {
    foo({}, 1000000000);
}
