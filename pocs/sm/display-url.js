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
print(stack.source, "source-c.js");
print(stack.parent.source, "source-b.js");
print(stack.parent.parent.source, "source-a.js");
