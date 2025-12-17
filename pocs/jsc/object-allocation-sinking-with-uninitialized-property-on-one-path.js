function foo(p) {
    var b = {};
    b.a = {};
    if (p)
        b.a.C = p.q;
    return b.a.C;
}
noInline(foo);

for (var i = 0; i < testLoopCount; i++)
    foo(true);


function foo2(p) {
    var o = {};
    if (p)
        o.f = {};
    return o.f;
}
noInline(foo2);

for (var i = 0; i < testLoopCount; i++)
    foo2(true);

