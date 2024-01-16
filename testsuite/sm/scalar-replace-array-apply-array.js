

setJitCompilerOption("baseline.warmup.trigger", 0);
setJitCompilerOption("ion.warmup.trigger", 100);


gczeal(0);


function makeTest(count) {
  var args = Array(count).fill(0).join(",");

  return Function(`
    function g() {
      return arguments.length;
    }

    function f(...args) {
      
      
      assertRecoveredOnBailout(args, true);
      return g(...args);
    }

    
    assertEq(isSmallFunction(f), true);

    function test() {
      for (let i = 0; i < 1000; ++i) {
        assertEq(f(${args}), ${count});
      }
    }

    return test;
  `)();
}


const maxRestArgs = 14;

for (let i = 0; i <= maxRestArgs; ++i) {
  makeTest(i)();
}
