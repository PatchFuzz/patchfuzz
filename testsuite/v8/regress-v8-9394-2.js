





function test() {
  function f() {
    with ({}) {
      
      
      
      
      
      
      return value;
    }
  }
  var value = 2;
  var status = f();
  return value;
}
test();
