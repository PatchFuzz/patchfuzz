setJitCompilerOption("baseline.warmup.trigger", 0);
setJitCompilerOption("ion.warmup.trigger", 120);
gczeal(0);

with ({}) {}

function bar(...rest) {
  
  print(rest, true);
  return rest[0];
}

function foo(n, ...rest) {
  
  print(rest, false);
  var sum = 0;
  for (var i = 0; i < n; i++) {
    sum += bar(i);
  }
  trialInline();
  return sum;
}


foo(110);


print(foo(1000), 499500);
