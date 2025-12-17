setJitCompilerOption("baseline.warmup.trigger", 0);
setJitCompilerOption("ion.warmup.trigger", 100);

var uceFault = function (i) {
  if (i > 98)
    uceFault = function (i) {return true;};
  return false;
}

function test() {
  var f = function inner(i) {
    
    
    var foo = inner;
    print(foo, true);
    if (uceFault(i) || uceFault(i)) {
      print(foo, inner);
    }
  };
  with ({}); 
  for (var i = 0; i < 100; i++) {
    f(i);
  }
}
test();
