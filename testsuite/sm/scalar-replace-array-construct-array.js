

setJitCompilerOption("baseline.warmup.trigger", 0);
setJitCompilerOption("ion.warmup.trigger", 100);


gczeal(0);


function makeTest(count) {
  var args = Array(count).fill(0).join(",");

  return Function(`
    class Base {
      constructor() {
        this.count = arguments.length;
      }
    }
  
    class C extends Base {
      constructor(...args) {
        
        
        assertRecoveredOnBailout(args, true);
        return super(...args);
      }
    }

    
    assertEq(isSmallFunction(C), true);

    function test() {
      for (let i = 0; i < 1000; ++i) {
        let obj = new C(${args});
        assertEq(obj.count, ${count});
      }
    }

    return test;
  `)();
}


const maxRestArgs = 14;

for (let i = 0; i <= maxRestArgs; ++i) {
  makeTest(i)();
}
