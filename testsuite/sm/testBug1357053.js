

try {
    enableSingleStepProfiling();
    disableSingleStepProfiling();
} catch(e) {
    
    quit();
}

enableGeckoProfiling();
var m = new Function('g', "'use asm'; var tof=g.Math.fround; var fun=g.Math.ceil; function f(d) { d=tof(d); return tof(fun(d)) } return f");
var f = m(this);
enableSingleStepProfiling();
f(.1);
