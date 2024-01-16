







function NewModule() {
  "use asm";
  function foo() {}
  return {foo:foo};
};

var v = NewModule();
