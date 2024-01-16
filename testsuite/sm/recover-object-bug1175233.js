








if (getJitCompilerOptions()["ion.warmup.trigger"] <= 130)
    setJitCompilerOption("ion.warmup.trigger", 130);




if (getJitCompilerOptions()["ion.forceinlineCaches"])
    setJitCompilerOption("ion.forceinlineCaches", 0);


gczeal(0);

var uceFault = function (j) {
    if (j >= max)
        uceFault = function (j) { return true; };
    return false;
}

function f(j) {
    var i = Math.pow(2, j) | 0;
    var obj = {
      i: i,
      v: i + i
    };
    
    
    
    assertRecoveredOnBailout(obj, true);
    assertRecoveredOnBailout(obj.v, true);
    if (uceFault(j) || uceFault(j)) {
        
        
        assertEq(obj.v, 2 * i);
    }
    return 2 * obj.i;
}

var max = 150;
for (var j = 0; j <= max; ++j) {
    with({}){};
    f(j);
}
