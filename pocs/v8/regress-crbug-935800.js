function foo() {
  "use asm";
  function bar() {}
  return {bar: bar};
}
var module = foo();
print(Object.getOwnPropertyNames(module.bar).includes("prototype"));
print(new module.bar(), module.bar);
