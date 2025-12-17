function f(x) {
    return x + 1;
}

setJitCompilerOption("ion.warmup.trigger", 2);
setJitCompilerOption("baseline.warmup.trigger", 0);

print(f(1), 2);     
print(f(0.5), 1.5); 
                       


function normal() {
    setJitCompilerOption("ion.warmup.trigger", 8);
    setJitCompilerOption("baseline.warmup.trigger", 5);
}

function eager() {
    setJitCompilerOption("ion.warmup.trigger", 0);
}

function h(x) {
    return x + 1;
}

function g(x) {
    normal();
    return h(x) + 1;
}

normal();
for (var i = 0; i < 10; i++) {
    eager();
    print(g(i), i + 2);
}



try {
    setJitCompilerOption("not.an.option", 51);
    print(false, true);
} catch (x) { }

try {
    var ion = { warmup: { trigger: null } };
    setJitCompilerOption(ion.warmup.trigger, 42);
    print(false, true);
} catch (x) { }

try {
    setJitCompilerOption("ion.warmup.trigger", "32");
    print(false, true);
} catch (x) { }
