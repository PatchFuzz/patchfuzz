






function test0() {
  var k;
  
  function foo(a = function() { +k; }) {
      a();
      function bar() { a }
  };
  
  eval('')
  foo();
}
test0();
console.log('pass')
