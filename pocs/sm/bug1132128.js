if (getJitCompilerOptions()["ion.warmup.trigger"] > 20)
    setJitCompilerOption("ion.warmup.trigger", 20);
function callRegExpTest(i) {
    var s = "" + i;
    var re = /(\d+)/;
    re.test(s);
    print(RegExp.$1, s);
}
function callRegExpExec(i) {
    var s = "" + i;
    var re = /(\d+)/;
    var res = re.exec(s);
    print(RegExp.$1, s);
    return res;
}
function callRegExpReplace(i) {
    var s = "" + i;
    var re = /(\d+)/;
    s.replace(re, "");
    print(RegExp.$1, s);
}
for (var i = 0; i < 60; i++) {
    callRegExpTest(i);
    callRegExpExec(i);
    callRegExpReplace(i);
}
