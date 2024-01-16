
setJitCompilerOption("offthread-compilation.enable", 0);

var opts = getJitCompilerOptions();
if (!opts['ion.enable'] || !opts['baseline.enable'] ||
    opts["ion.forceinlineCaches"] || opts["ion.check-range-analysis"])
{
    crash("Cannot test assertRecoveredOnBailout");
}


gczeal(0);

function g() {
    return inIon();
}


while(!(res = g()));


if (res !== true)
    crash("Cannot enter IonMonkey");


function f () {
    var o = {};
    assertRecoveredOnBailout(o, false);
    return inIon();
}


while(!(res = f()));


assertEq(res, true);
