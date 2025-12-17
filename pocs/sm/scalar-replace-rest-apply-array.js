gczeal(0);


function makeTest(count) {
  var args = Array(count).fill(0).join(",");

  return Function(`
    function g() {
      return arguments.length;
    }

    function f(...args) {
      print(args, true);
      return g(...args);
    }

    function test() {
      
      with ({});

      for (let i = 0; i < 1000; ++i) {
        print(f(${args}), ${count});
      }
    }

    return test;
  `)();
}




const maxRestArgs = 20;

for (let i = 0; i <= maxRestArgs; ++i) {
  makeTest(i)();
}
