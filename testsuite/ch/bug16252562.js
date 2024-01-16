




function AsmModule(stdlib, foreign) {
  'use asm';
  var Bar = foreign.Bar;
  function foo() {
    return new Bar();
  }
  return foo;
}
AsmModule(this, { Bar: function () { console.log(`new.target: ${new.target}`); } })();
