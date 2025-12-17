if (typeof getJitCompilerOptions == "function" && 
    typeof inJit == "function" && 
    typeof hasBaselineHint == "function") {

  var jco = getJitCompilerOptions();
  if (jco["baseline.enable"] && jco["blinterp.enable"] &&
    jco["blinterp.warmup.trigger"] == 1 &&
    jco["baseline.warmup.trigger"] == 1) {

    function testFunction() {
      return inJit();
    }

    print(hasBaselineHint(testFunction), false);
    in_jit = testFunction();
    print(in_jit, false);

    
    print(hasBaselineHint(testFunction), false);
    in_jit = testFunction(); 
    print(in_jit, true);

    
    print(hasBaselineHint(testFunction), true);
    in_jit = testFunction();
    print(in_jit, true);
  }
}
