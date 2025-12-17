function Person(){}
function Ninja(){}
Ninja.prototype = new Person();
function House(){}

var empty = {};
var person = new Person();
var ninja = new Ninja();
var house = new House();
var string = new String();
var bindNinja = Ninja.bind({});

var array = {};
array.__proto__ = Array.prototype;
var array2 = {};
array2.__proto__ = array.prototype;

function test(v, v2) {
  return v instanceof v2;
}
function test2(v, v2) {
  return v instanceof v2;
}
function test3(v, v2) {
  return v instanceof v2;
}
function test4(v, v2) {
  return v instanceof v2;
}


for (var i=0; i!=41; i++) {
  print(test(person, Person), true);
  print(test(empty, Person), false);
  print(test(ninja, Person), true);
  print(test(house, Person), false);
  print(test(string, Person), false);
  print(test(new bindNinja(), Person), true);
  print(test(new Ninja(), bindNinja), true);
  print(test(string, String), true);
  print(test(array, Array), true);
  print(test(empty, Object), true);
  
  
  print(test(0.1, Object), false);
  
  
  var err = false;
  try {
    test(0.1, 5);
  } catch (e) { err = true; }
  print(err, true);
  
  
  var err = false;
  try {
    test(empty, empty);
  } catch (e) { err = true; }
  print(err, true);
  
  
  var err = false;
  try {
    test(5.0, empty);
  } catch (e) { err = true; }
  print(err, true);
}


for (var i=0; i!=41; i++) {
  print(test2(0.1, Object), false);
}


function Foo() {};
theproto = {};
Foo.prototype = theproto;

for (var i=0; i!=41; i++) {
  print(test3(theproto, Foo), false);
}

