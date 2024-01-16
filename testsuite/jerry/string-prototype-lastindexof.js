















function length_configurable()
{
  function is_es51() {
    return (typeof g === "function");
    { function g() {} }
  }
  return is_es51() ? false : true;
}

assert(Object.getOwnPropertyDescriptor(String.prototype.lastIndexOf, 'length').configurable === length_configurable());

assert(Object.getOwnPropertyDescriptor(String.prototype.lastIndexOf, 'length').enumerable === false);

assert(Object.getOwnPropertyDescriptor(String.prototype.lastIndexOf, 'length').writable === false);

assert(String.prototype.lastIndexOf.length === 1);


assert("Hello welcome, welcome to the universe.".lastIndexOf("welcome") === 15);

assert("Hello world, welcome to the universe.".lastIndexOf("Hello world, welcome to the universe.") === 0);

assert("Hello welcome, welcome to the universe.".lastIndexOf("welcome", 5) === -1);

assert("Hello welcome, welcome to the universe.".lastIndexOf("welcome", -100) == -1);

assert("Hello welcome, welcome to the universe.".lastIndexOf("welcome", 15) === 15);

assert("Hello welcome, welcome to the universe o.".lastIndexOf("o", 10) === 10);

assert("Hello welcome, welcome to the universe o.".lastIndexOf("o", 25) === 24);

assert("Helloooo woooorld".lastIndexOf("oooo", 6) === 4);


assert("\uFFA2".lastIndexOf("\uFFA2") === 0);

assert("\uFFA2".lastIndexOf("A") === -1);

assert("w2\uFFA2 A".lastIndexOf("A") === 4);

assert("w2\u1D306A".indexOf("A") === 4);

assert("\u0070A".lastIndexOf("A") === 1);

assert("\u8000A".lastIndexOf("A") === 1);

assert("\u0080\u0080\u0980\u1080A".lastIndexOf("A") === 4);

assert("\u0080\u0980\u1080A\u0080\u0080\u0980\u1080".lastIndexOf("A", 4) === 3);

assert("\u0080\u0080\u0980\u1080A\u0980AA\u0980A".lastIndexOf("A\u0980A") === 7);

assert("\u0080\u0080\u0980\u1080A\u0980AA\u0980A".lastIndexOf("A\u0980A", 4) === 4);

assert("\uD834\uDF06".lastIndexOf("\uDF06") === 1);

assert("\uD834\uDF06w2\u1D306D\uDF06w2\u1D306D".lastIndexOf("D") === 12);

assert("\ud800\dc00\ud800\dc00".lastIndexOf("\dc00") === 6);


assert(String.prototype.lastIndexOf.call(new String()) === -1);

assert(String.prototype.lastIndexOf.call("Hello world, welcome to the universe.","") === 37);

assert(String.prototype.lastIndexOf.call("","") === 0);


assert("Hello world, welcome to the universe.".lastIndexOf(NaN) === -1);

assert("Hello world, welcome to the universe.".lastIndexOf("o", NaN) === 22);


assert(String.prototype.lastIndexOf.call({}) === -1);


assert("hello world!".lastIndexOf("world", -Infinity) === -1);

assert("hello world!".lastIndexOf("world", Infinity) === 6);


assert("hello world!".lastIndexOf(-1) === -1);

assert("hello 0 world!".lastIndexOf(-0) === 6);


assert("hello world!".lastIndexOf(undefined) === -1);

var undefined_var;
assert("Hello world, welcome to the universe.".lastIndexOf("welcome", undefined_var) === 13);


assert("true".lastIndexOf(true, false) === 0);


try {
  String.prototype.lastIndexOf.call(undefined);
  assert(false);
} catch(e) {
  assert(e instanceof TypeError);
}


try {
  String.prototype.lastIndexOf.call(null);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}


assert(String.prototype.lastIndexOf.call(true, "e") === 3);
assert(String.prototype.lastIndexOf.call(false, "e") === 4);


var test_object = {firstName:"John", lastName:"Doe"};
assert(String.prototype.lastIndexOf.call(test_object, "Obj") === 8);


assert(String.prototype.lastIndexOf.call(123, "2") === 1);
