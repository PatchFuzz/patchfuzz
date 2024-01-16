eval(`
  function a() {
    return b();
  }
  
`);

eval(`
  function b() {
    return c();
  }
  
`);

eval(`
  function c() {
    return saveStack();
  }
  
`);

let stack = a();
print(stack);
assertEq(stack.source, "source-c.js");
assertEq(stack.parent.source, "source-b.js");
assertEq(stack.parent.parent.source, "source-a.js");
