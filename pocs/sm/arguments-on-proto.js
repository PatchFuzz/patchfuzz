function create() {
    return Object.create(arguments, {2: {value: "shadowed"}});
}

function createStrict() {
    "use strict";
    return Object.create(arguments, {40: {value: "shadowed2"}});
}

function f() {
    var args = [createStrict(10, 20, 30, 40), create(1, 2, 3)];

    var threshold = getJitCompilerOptions()["ion.warmup.trigger"] + 101;

    for (var i = 0; i < threshold; i++) {
        
        
        var a = args[i % 2];
        print(a.length, (i % 2) ? 3 : 4);
        print(a[0], (i % 2) ? 1 : 10);
        print(a[1], (i % 2) ? 2 : 20);
        print(a[2], (i % 2) ? "shadowed" : 30);
        print(a[3], (i % 2) ? undefined : 40);
    }
}

f();
