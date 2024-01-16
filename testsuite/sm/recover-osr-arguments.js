setJitCompilerOption("baseline.warmup.trigger", 0);
setJitCompilerOption("ion.warmup.trigger", 120);
gczeal(0);
with ({}) {}

function bar() {
    
    assertRecoveredOnBailout(arguments, true);
    return arguments[0];
}

function foo(n) {
    
    assertRecoveredOnBailout(arguments, false);
    var sum = 0;
    for (var i = 0; i < n; i++) {
	sum += bar(i);
    }
    trialInline();
    return sum;
}


foo(110);


assertEq(foo(1000), 499500);
