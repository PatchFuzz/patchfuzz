
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

    function test() {
      
      with ({});

      for (let i = 0; i < 1000; ++i) {
        let obj = new C(${args});
        assertEq(obj.count, ${count});
      }
    }

    return test;
  `)();
}




const maxRestArgs = 20;

for (let i = 0; i <= maxRestArgs; ++i) {
  makeTest(i)();
}
