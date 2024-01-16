






























x = 0;


function test1() {
  var value = 1;
  var status;
  with ({}) { status = delete value; }
  return value + ":" + status;
}

assertEquals("1:false", test1(), "test1");
assertEquals(0, x, "test1");  



function test2() {
  function f() {
    with ({}) { return delete value; }
  }
  var value = 2;
  var status = f();
  return value + ":" + status;
}

assertEquals("2:false", test2(), "test2");
assertEquals(0, x, "test2");  



function test3(value) {
  var status;
  with ({}) { status = delete value; }
  return value + ":" + status;
}

assertEquals("3:false", test3(3), "test3");
assertEquals(0, x, "test3");  



function test4(value) {
  function f() {
    with ({}) { return delete value; }
  }
  var status = f();
  return value + ":" + status;
}

assertEquals("4:false", test4(4), "test4");
assertEquals(0, x, "test4");  



function test5(value) {
  var status;
  with ({}) { status = delete value; }
  return arguments[0] + ":" + status;
}

assertEquals("5:false", test5(5), "test5");
assertEquals(0, x, "test5");  

function test6(value) {
  function f() {
    with ({}) { return delete value; }
  }
  var status = f();
  return arguments[0] + ":" + status;
}

assertEquals("6:false", test6(6), "test6");
assertEquals(0, x, "test6");  



function test7(object) {
  with (object) { return delete value; }
}

var o = {value: 7};
assertEquals(true, test7(o), "test7");
assertEquals(void 0, o.value, "test7");
assertEquals(0, x, "test7");  



function test8() {
  with ({}) { return delete x; }
}

assertEquals(true, test8(), "test8");
assertThrows("x");  



function test9() {
  with ({}) { return delete x; }
}

assertThrows("x");  
assertEquals(true, test9(), "test9");



var y = 10;
function test10() {
  with ({}) { return delete y; }
}

assertEquals(false, test10(), "test10");
assertEquals(10, y, "test10");
