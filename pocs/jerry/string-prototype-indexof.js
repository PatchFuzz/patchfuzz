function length_configurable()
{
  function is_es51() {
    return (typeof g === "function");
    { function g() {} }
  }
  return is_es51() ? false : true;
}

assert(Object.getOwnPropertyDescriptor(String.prototype.indexOf, 'length').configurable === length_configurable());

assert(Object.getOwnPropertyDescriptor(String.prototype.indexOf, 'length').enumerable === false);

assert(Object.getOwnPropertyDescriptor(String.prototype.indexOf, 'length').writable === false);

assert(String.prototype.indexOf.length === 1);

assert("Hello world, welcome to the universe.".indexOf("welcome") === 13);

assert("Hello world, welcome to the universe.".indexOf("Hello world, welcome to the universe.") === 0);

assert("Hello world, welcome to the universe.".indexOf("welcome",10) == 13);

assert("Hello world, welcome to the universe.".indexOf("welcome",-100) == 13);

assert("Hello world, welcome to the universe.".indexOf("welcome", 15) === -1);

assert("Hello world, welcome to the universe.".indexOf("o", 15) === 17);


assert("\uFFA2".indexOf("\uFFA2") === 0);

assert("\uFFA2".indexOf("A") === -1);

assert("w2\uFFA2A".indexOf("A") === 3);

assert("w2\u1D306A".indexOf("A") === 4);

assert("\uD834\uDF06".indexOf("\uDF06") === 1);

assert("\uD834\uDF06w2\u1D306D".indexOf("D") === 6);

assert("\ud800\dc00".indexOf("\dc00") === 1);

assert("\u8000\u0700\u8000\u8000A".indexOf("A", 3) === 4);


assert("aaaabaaa".indexOf("aaaba") === 1);


assert(String.prototype.indexOf.call(new String()) === -1);

assert(String.prototype.indexOf.call("","") === 0);


assert("Hello world, welcome to the universe.".indexOf(NaN) === -1);

assert("Hello world, welcome to the universe.".indexOf("welcome",NaN) === 13);


assert(String.prototype.indexOf.call({}) === -1);


assert("hello world!".indexOf("world", -Infinity) === 6);

assert("hello world!".indexOf("world", Infinity) === -1);


assert("hello world!".indexOf(-1) === -1);

assert("hello 0 world!".indexOf(-0) === 6);


assert("hello world!".indexOf(undefined) === -1);

var undefined_var;
assert("Hello world, welcome to the universe.".indexOf("welcome", undefined_var) === 13);


assert("true".indexOf(true, false) === 0);


try {
  String.prototype.indexOf.call(undefined);
  assert(false);
} catch(e) {
  assert(e instanceof TypeError);
}


try {
  String.prototype.indexOf.call(null);
  assert(false);
} catch(e) {
  assert(e instanceof TypeError);
}


assert(String.prototype.indexOf.call(true, "e") === 3);
assert(String.prototype.indexOf.call(false, "e") === 4);


var test_object = {firstName:"John", lastName:"Doe"};
assert(String.prototype.indexOf.call(test_object, "Obj") === 8);


assert(String.prototype.indexOf.call(123, "2") === 1);
