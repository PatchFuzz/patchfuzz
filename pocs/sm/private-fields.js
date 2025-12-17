;

function test() {
  class A {
    #x;
  }
};

evalWithCache(test.toString(), { assertEqBytecode: true, assertEqResult: true });
