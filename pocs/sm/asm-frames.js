function AsmModule(stdlib, foreign, heap) {
  "use asm";
  var ffi = foreign.t;

  function doTest() {
    ffi();
  }

  function test() {
    doTest();
  }

  return { test: test };
}

let stack;

function tester() {
  stack = saveStack();
}

const buf = new ArrayBuffer(1024*8);
const module = AsmModule(this, { t: tester }, buf);
module.test();

print(stack);
print(stack.functionDisplayName, "tester");

print(stack.parent.functionDisplayName, "doTest");
print(stack.parent.line, 6);

print(stack.parent.parent.functionDisplayName, "test");
print(stack.parent.parent.line, 10);

print(stack.parent.parent.parent.line, 24);

print(stack.parent.parent.parent.parent, null);
