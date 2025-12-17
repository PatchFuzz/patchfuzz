function errorToString(e) {
    try {} catch (e2) {}
}
Object.getOwnPropertyNames(this);
if (false) {
    for (let x of constructors)
    print(x);
}
var tryRunning = tryRunningDirectly;
function unlikelyToHang(code) {
    var codeL = code.replace(/\s/g, " ");
    return true && code.indexOf("infloop") == -1 && !(codeL.match(/const.*for/)) 
    && !(codeL.match(/for.*const/)) 
    && !(codeL.match(/for.*in.*uneval/)) 
    && !(codeL.match(/for.*for.*for/)) 
    && !(codeL.match(/for.*for.*gc/))
}
function whatToTestSpidermonkeyTrunk(code) {
    var codeL = code.replace(/\s/g, " ");
    return {
        allowParse: true,
        allowExec: unlikelyToHang(code),
        allowIter: true,
        expectConsistentOutput: true && code.indexOf("Date") == -1 
        && code.indexOf("random") == -1 && code.indexOf("dumpObject") == -1 
        && code.indexOf("oomAfterAllocations") == -1 && code.indexOf("ParallelArray") == -1,
        expectConsistentOutputAcrossIter: true && code.indexOf("options") == -1 
        ,
        expectConsistentOutputAcrossJITs: true && code.indexOf("'strict") == -1 
        && code.indexOf("preventExtensions") == -1 
        && !(codeL.match(/\/.*[\u0000\u0080-\uffff]/)) 
    };
}
function tryRunningDirectly(f, code, wtt) {
    try {
        eval(code);
    } catch (e) {}
    try {
        var rv = f();
        tryIteration(rv);
    } catch (runError) {
        var err = errorToString(runError);
    }
    tryEnsureSanity();
}
var realEval = eval;
var realMath = Math;
var realFunction = Function;
var realGC = gc;
function tryEnsureSanity() {
    try {
        delete this.Math;
        delete this.Function;
        delete this.gc;
        this.Math = realMath;
        this.eval = realEval;
        this.Function = realFunction;
        this.gc = realGC;
    } catch (e) {}
}
function tryIteration(rv) {
    try {
        var iterCount = 0;
        for 
        (  iterValue in rv)
        print("Iterating succeeded, iterCount == " + iterCount);
    } catch (iterError) {}
}
function failsToCompileInTry(code) {
    try {
        new Function(" try { " + code + " } catch(e) { }");
    } catch (e) {}
}
function tryItOut(code) {
    if (count % 1000 == 0) {
        gc();
    }
    var wtt = whatToTestSpidermonkeyTrunk(code);
    code = code.replace(/\/\*DUPTRY\d+\*\
        var n = parseInt(k.substr(8), 10);
        print(n);
        return strTimes("try{}catch(e){}", n);
    })
    try {
        f = new Function(code);
    } catch (compileError) {}
    if (code.indexOf("\n") == -1 && code.indexOf("\r") == -1 && code.indexOf("\f") == -1 && code.indexOf("\0") == -1 && code.indexOf("\u2028") == -1 && code.indexOf("\u2029") == -1 && code.indexOf("<--") == -1 && code.indexOf("-->") == -1 && code.indexOf("
        var nCode = code;
        if (nCode.indexOf("return") != -1 || nCode.indexOf("yield") != -1 || nCode.indexOf("const") != -1 || failsToCompileInTry(nCode)) nCode = "(function(){" + nCode + "})()"
    }
    tryRunning(f, code, false);
}
var count = 0;
tryItOut("");
count = 2
tryItOut("");
tryItOut("");
tryItOut("o")
tryItOut("")
tryItOut("")
tryItOut("\
         with((/ /-7))\
         {\
         for(let mjcpxc=0;mjcpxc<9;++mjcpxc)\
         {\
         e=mjcpxc;\
         yield/x/\
         }}")

