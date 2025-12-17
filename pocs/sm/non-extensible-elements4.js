function doStore(a) {
    for (var i = 0; i < 100; i++) {
        a[1] = i;
    }
}
function test() {
    with(this) {} 

    var a = {0: 0, 1: 1};
    Object.preventExtensions(a);
    doStore(a);
    print(a[1], 99);

    a[1] = 0;
    Object.freeze(a);
    doStore(a);
    print(a[1], 0);
}

setJitCompilerOption("ion.forceinlineCaches", 1);
test();

setJitCompilerOption("ion.forceinlineCaches", 0);
test();
