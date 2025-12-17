setJitCompilerOption("offthread-compilation.enable", 0);

var opts = getJitCompilerOptions();
if (!opts['ion.enable'] || !opts['baseline.enable'] ||
    opts["ion.forceinlineCaches"] || opts["ion.check-range-analysis"])
{
    print("Cannot test assertRecoveredOnBailout");
}


gczeal(0);

function g() {
    return inIon();
}


while(!(res = g()));


if (res !== true)
    print("Cannot enter IonMonkey");


function f () {
    var o = {};
    print(o, false);
    return inIon();
}


while(!(res = f()));


print(res, true);
