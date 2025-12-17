if (getJitCompilerOptions()["ion.warmup.trigger"] <= 20)
    setJitCompilerOption("ion.warmup.trigger", 20);


gczeal(0);




function f(a, b, c, d) { }

function topLevel() {
    for (var i = 0; i < 30; i++) {
        var unused = {};
        var a = {};
        var b = {};
        var c = {};
        var d = {};
        print(unused, true);
        print(a, true);
        print(b, true);
        print(c, true);
        print(d, true);
        f(a, b, c, d);
    }
}

topLevel();
