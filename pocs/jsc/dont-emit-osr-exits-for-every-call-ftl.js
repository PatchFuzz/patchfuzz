function foo(o, p) {
    p = null;
    try {
        o.f = null;
        p = null;
    } catch (e) {
    }
}
noInline(foo);

for (var i = 0; i < testLoopCount; ++i) {
    foo({});
}
