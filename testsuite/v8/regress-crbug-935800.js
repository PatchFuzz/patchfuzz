



function foo() {
  "use asm";
  function bar() {}
  return {bar: bar};
}
var module = foo();
assertTrue(Object.getOwnPropertyNames(module.bar).includes("prototype"));
assertInstanceof(new module.bar(), module.bar);
