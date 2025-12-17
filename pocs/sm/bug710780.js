function foo() {
  function bar() {
    function baz() {
      print(arguments.callee.caller === null, false);
    }
    for (var i = 0; i < 10; i++)
      baz();
  }
  bar();
}
foo();
