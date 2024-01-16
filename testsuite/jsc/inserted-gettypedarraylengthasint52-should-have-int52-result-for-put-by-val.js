
const ta = new Uint8Array();
function foo() {
  function bar() {
    ta[0] = 0;
  }
  for (let i=0; i<100000; i++) {
    bar();
  }

}
foo();
