















function length_configurable()
{
  function is_es51() {
    return (typeof g === "function");
    { function g() {} }
  }
  return is_es51() ? false : true;
}

print(Object.getOwnPropertyDescriptor(String.prototype.indexOf, 'length').configurable === length_configurable());

print(Object.getOwnPropertyDescriptor(String.prototype.indexOf, 'length').enumerable === false);

print(Object.getOwnPropertyDescriptor(String.prototype.indexOf, 'length').writable === false);

print(String.prototype.indexOf.length === 1);

print("Hello world, welcome to the universe.".indexOf("welcome") === 13);

print("Hello world, welcome to the universe.".indexOf("Hello world, welcome to the universe.") === 0);

print("Hello world, welcome to the universe.".indexOf("welcome",10) == 13);

print("Hello world, welcome to the universe.".indexOf("welcome",-100) == 13);

print("Hello world, welcome to the universe.".indexOf("welcome", 15) === -1);

print("Hello world, welcome to the universe.".indexOf("o", 15) === 17);


print("\uFFA2".indexOf("\uFFA2") === 0);

print("\uFFA2".indexOf("A") === -1);

print("w2\uFFA2A".indexOf("A") === 3);

print("w2\u1D306A".indexOf("A") === 4);

print("\uD834\uDF06".indexOf("\uDF06") === 1);

print("\uD834\uDF06w2\u1D306D".indexOf("D") === 6);

print("\ud800\dc00".indexOf("\dc00") === 1);

print("\u8000\u0700\u8000\u8000A".indexOf("A", 3) === 4);


print("aaaabaaa".indexOf("aaaba") === 1);


print(String.prototype.indexOf.call(new String()) === -1);

print(String.prototype.indexOf.call("","") === 0);


print("Hello world, welcome to the universe.".indexOf(NaN) === -1);

print("Hello world, welcome to the universe.".indexOf("welcome",NaN) === 13);


print(String.prototype.indexOf.call({}) === -1);


print("hello world!".indexOf("world", -Infinity) === 6);

print("hello world!".indexOf("world", Infinity) === -1);


print("hello world!".indexOf(-1) === -1);

print("hello 0 world!".indexOf(-0) === 6);


print("hello world!".indexOf(undefined) === -1);

var undefined_var;
print("Hello world, welcome to the universe.".indexOf("welcome", undefined_var) === 13);


print("true".indexOf(true, false) === 0);


try {
  String.prototype.indexOf.call(undefined);
  print(false);
} catch(e) {
  print(e instanceof TypeError);
}


try {
  String.prototype.indexOf.call(null);
  print(false);
} catch(e) {
  print(e instanceof TypeError);
}


print(String.prototype.indexOf.call(true, "e") === 3);
print(String.prototype.indexOf.call(false, "e") === 4);


var test_object = {firstName:"John", lastName:"Doe"};
print(String.prototype.indexOf.call(test_object, "Obj") === 8);


print(String.prototype.indexOf.call(123, "2") === 1);
