setJitCompilerOption("baseline.warmup.trigger", 0);
setJitCompilerOption("ion.warmup.trigger", 120);
gczeal(0);
with ({}) {}

function bar(i) {
    
    print(arguments, true);
    return arguments[i & 1]|0;
}

function foo(n) {
    
    print(arguments, false);
    var sum = 0;
    for (var i = 0; i < n; i++) {
        sum += bar(i);
    }
    trialInline();
    return sum;
}


foo(110);


print(foo(1000), 249500);
