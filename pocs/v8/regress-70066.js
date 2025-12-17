x = 0;


function test1() {
  var value = 1;
  var status;
  with ({}) { status = delete value; }
  return value + ":" + status;
}

print("1:false", test1(), "test1");
print(0, x, "test1");  



function test2() {
  function f() {
    with ({}) { return delete value; }
  }
  var value = 2;
  var status = f();
  return value + ":" + status;
}

print("2:false", test2(), "test2");
print(0, x, "test2");  



function test3(value) {
  var status;
  with ({}) { status = delete value; }
  return value + ":" + status;
}

print("3:false", test3(3), "test3");
print(0, x, "test3");  



function test4(value) {
  function f() {
    with ({}) { return delete value; }
  }
  var status = f();
  return value + ":" + status;
}

print("4:false", test4(4), "test4");
print(0, x, "test4");  



function test5(value) {
  var status;
  with ({}) { status = delete value; }
  return arguments[0] + ":" + status;
}

print("5:false", test5(5), "test5");
print(0, x, "test5");  

function test6(value) {
  function f() {
    with ({}) { return delete value; }
  }
  var status = f();
  return arguments[0] + ":" + status;
}

print("6:false", test6(6), "test6");
print(0, x, "test6");  



function test7(object) {
  with (object) { return delete value; }
}

var o = {value: 7};
print(true, test7(o), "test7");
print(void 0, o.value, "test7");
print(0, x, "test7");  



function test8() {
  with ({}) { return delete x; }
}

print(true, test8(), "test8");
print("x");  



function test9() {
  with ({}) { return delete x; }
}

print("x");  
print(true, test9(), "test9");



var y = 10;
function test10() {
  with ({}) { return delete y; }
}

print(false, test10(), "test10");
print(10, y, "test10");
