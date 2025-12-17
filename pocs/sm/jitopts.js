function jitTogglesMatch(opts) {
  var currentOpts = getJitCompilerOptions();
  for (var k in opts) {
    if (k.indexOf(".enable") > 0 && opts[k] != currentOpts[k])
      return false;
  }
  return true;
}


function withJitOptions(opts, fn) {
  var oldOpts = getJitCompilerOptions();
  for (var k in opts)
    setJitCompilerOption(k, opts[k]);
  try {
    fn();
  } finally {
    for (var k in oldOpts)
      setJitCompilerOption(k, oldOpts[k]);
  }
}





var Opts_BaselineEager =
    {
      'ion.enable': 1,
      'ion.warmup.trigger': 100,
      'baseline.enable': 1,
      'baseline.warmup.trigger': 0,
      'offthread-compilation.enable': 1
    };





var Opts_IonEagerNoOffthreadCompilation =
    {
      'ion.enable': 1,
      'ion.warmup.trigger': 0,
      'baseline.enable': 1,
      'baseline.warmup.trigger': 0,
      'offthread-compilation.enable': 0,
    };

var Opts_Ion2NoOffthreadCompilation =
    {
      'ion.enable': 1,
      'ion.warmup.trigger': 3,
      'baseline.enable': 1,
      'baseline.warmup.trigger': 1,
      'offthread-compilation.enable': 0
    };

var Opts_NoJits =
    {
      'ion.enable': 0,
      'ion.warmup.trigger': 0,
      'baseline.warmup.trigger': 0,
      'baseline.enable': 0,
      'offthread-compilation.enable': 0
    };
