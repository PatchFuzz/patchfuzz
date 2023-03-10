;

function test() {
  class A {
    #x;
  }
};

evalWithCache(test.toString(), { printBytecode: true, printResult: true });
