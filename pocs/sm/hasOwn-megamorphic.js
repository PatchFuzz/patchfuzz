setJitCompilerOption("offthread-compilation.enable", 0);
setJitCompilerOption("baseline.warmup.trigger", 5);
setJitCompilerOption("ion.warmup.trigger", 5);

function Base() {
}

Base.prototype.foo = false;




let objs = [
    {a: true},
    {b: true},
    {c: true},
    {d: true},
    {e: true},
    {f: true},
    {g: true},
    new Base(),
];

function doTest(i) {
    let o = objs[i % objs.length];
    print(!o.foo, true);
    print(Object.hasOwn(o, "foo"), false);
}

for (var i = 0; i < 50; i++) {
    doTest(i);
}
