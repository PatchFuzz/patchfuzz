;
var oldOpts = getJitCompilerOptions();
for (var k in oldOpts)
    setJitCompilerOption(k, oldOpts[k]);
var newOpts = getJitCompilerOptions();
print(oldOpts, newOpts);
