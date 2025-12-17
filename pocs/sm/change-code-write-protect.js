var value = getJitCompilerOptions()["write-protect-code"];
setJitCompilerOption("write-protect-code", Number(!value));
