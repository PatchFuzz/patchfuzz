



function print_stack(unused_arg) {
  console.trace();
}
function asm(_, imports) {
  'use asm';
  var print_stack = imports.print_stack;
  function f() {
      print_stack(1);
  }
  return f;
}
asm({}, {'print_stack': print_stack})();
