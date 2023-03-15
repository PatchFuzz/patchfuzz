















function length_configurable()
{
  function is_es51() {
    return (typeof g === "function");
    { function g() {} }
  }
  return is_es51() ? false : true;
}

print(Object.getOwnPropertyDescriptor(String.prototype.lastIndexOf, 'length').configurable === length_configurable());

print(Object.getOwnPropertyDescriptor(String.prototype.lastIndexOf, 'length').enumerable === false);

print(Object.getOwnPropertyDescriptor(String.prototype.lastIndexOf, 'length').writable === false);

print(String.prototype.lastIndexOf.length === 1);


print("Hello welcome, welcome to the universe.".lastIndexOf("welcome") === 15);

print("Hello world, welcome to the universe.".lastIndexOf("Hello world, welcome to the universe.") === 0);

print("Hello welcome, welcome to the universe.".lastIndexOf("welcome", 5) === -1);

print("Hello welcome, welcome to the universe.".lastIndexOf("welcome", -100) == -1);

print("Hello welcome, welcome to the universe.".lastIndexOf("welcome", 15) === 15);

print("Hello welcome, welcome to the universe o.".lastIndexOf("o", 10) === 10);

print("Hello welcome, welcome to the universe o.".lastIndexOf("o", 25) === 24);

print("Helloooo woooorld".lastIndexOf("oooo", 6) === 4);


print("\uFFA2".lastIndexOf("\uFFA2") === 0);

print("\uFFA2".lastIndexOf("A") === -1);

print("w2\uFFA2 A".lastIndexOf("A") === 4);

print("w2\u1D306A".indexOf("A") === 4);

print("\u0070A".lastIndexOf("A") === 1);

print("\u8000A".lastIndexOf("A") === 1);

print("\u0080\u0080\u0980\u1080A".lastIndexOf("A") === 4);

print("\u0080\u0980\u1080A\u0080\u0080\u0980\u1080".lastIndexOf("A", 4) === 3);

print("\u0080\u0080\u0980\u1080A\u0980AA\u0980A".lastIndexOf("A\u0980A") === 7);

print("\u0080\u0080\u0980\u1080A\u0980AA\u0980A".lastIndexOf("A\u0980A", 4) === 4);

print("\uD834\uDF06".lastIndexOf("\uDF06") === 1);

print("\uD834\uDF06w2\u1D306D\uDF06w2\u1D306D".lastIndexOf("D") === 12);

print("\ud800\dc00\ud800\dc00".lastIndexOf("\dc00") === 6);


print(String.prototype.lastIndexOf.call(new String()) === -1);

print(String.prototype.lastIndexOf.call("Hello world, welcome to the universe.","") === 37);

print(String.prototype.lastIndexOf.call("","") === 0);


print("Hello world, welcome to the universe.".lastIndexOf(NaN) === -1);

print("Hello world, welcome to the universe.".lastIndexOf("o", NaN) === 22);


print(String.prototype.lastIndexOf.call({}) === -1);


print("hello world!".lastIndexOf("world", -Infinity) === -1);

print("hello world!".lastIndexOf("world", Infinity) === 6);


print("hello world!".lastIndexOf(-1) === -1);

print("hello 0 world!".lastIndexOf(-0) === 6);


print("hello world!".lastIndexOf(undefined) === -1);

var undefined_var;
print("Hello world, welcome to the universe.".lastIndexOf("welcome", undefined_var) === 13);


print("true".lastIndexOf(true, false) === 0);


try {
  String.prototype.lastIndexOf.call(undefined);
  print(false);
} catch(e) {
  print(e instanceof TypeError);
}


try {
  String.prototype.lastIndexOf.call(null);
  print(false);
} catch (e) {
  print(e instanceof TypeError);
}


print(String.prototype.lastIndexOf.call(true, "e") === 3);
print(String.prototype.lastIndexOf.call(false, "e") === 4);


var test_object = {firstName:"John", lastName:"Doe"};
print(String.prototype.lastIndexOf.call(test_object, "Obj") === 8);


print(String.prototype.lastIndexOf.call(123, "2") === 1);
