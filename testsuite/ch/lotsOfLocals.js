




const txt = `
  return function() {
    "use asm";
    function foo() {
      ${Array(50000).fill().map((_, i) => `var l${i} = 0.0;`).join("\n")}
    }
    return foo;
  }
`;
const asmModule = (new Function(txt))();
const asmFn = asmModule();
asmFn();
print("PASSED");
