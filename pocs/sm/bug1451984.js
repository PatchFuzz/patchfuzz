setJitCompilerOption("ion.forceinlineCaches", 1);
function f(x) {
    return Math.pow(Math.fround(Math.fround()), ~(x >>> 0));
}
print(f(-1),1);
print(f(-1),1);
print(f(-1),1);
print(f(-1),1);
