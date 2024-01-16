



setJitCompilerOption("offthread-compilation.enable", 0);
gcPreserveCode();

var itercount = 1000;
var warmup = 100;




if (getJitCompilerOptions()["ion.warmup.trigger"] > warmup)
    setJitCompilerOption("ion.warmup.trigger", warmup);

setJitCompilerOption("offthread-compilation.enable", 0);

function g(a, b, c, d) {
    return a + b + c + (d === undefined);
}

var g_inIonInLoop = false;
var g_inIonAtEnd = false;

function f(xs) {
    var sum = 0;
    var inIonInLoop = 0;
    for ( var i=0 ; i < itercount ; i++ ) {
	inIonInLoop |= inIon();
	sum += g.apply(null, xs);
    }
    g_ionAtEnd = inIon();
    g_inIonInLoop = !!inIonInLoop;
    return sum;
}



assertEq(f([1,2,3,4]), 6*itercount);





assertEq(g_inIonInLoop || !g_inIonAtEnd, true);



if (!g_inIonInLoop) {
    print("Leaving early - ion not kicking in at all");
    quit(0);
}




var headroom = [1,2,3];
headroom.length = 13;
assertEq(f(headroom), 7*itercount);



var thrown = false;
try {
    var long = [];
    long.length = getMaxArgs() + 1;
    f(long);
}
catch (e) {
    thrown = true;
    assertEq(e instanceof RangeError, true);
}
assertEq(thrown, true);
