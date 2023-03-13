















function length_configurable()
{
  function is_es51() {
    return (typeof g === "function");
    { function g() {} }
  }
  return is_es51() ? false : true;
}

print(Object.getOwnPropertyDescriptor(String.prototype.charAt, 'length').configurable === length_configurable());

print(Object.getOwnPropertyDescriptor(String.prototype.charAt, 'length').enumerable === false);

print(Object.getOwnPropertyDescriptor(String.prototype.charAt, 'length').writable === false);

print(String.prototype.charAt.length === 1);


print(String.prototype.charAt.call(new String()) === "");


print("hello world!".charAt(NaN) === "h");


print(String.prototype.charAt.call({})  === "[");


print("hello world!".charAt(0) === "h");

print("hello world!".charAt(1) === "e");


print("hello world!".charAt(-Infinity) === "");

print("hello world!".charAt(Infinity) === "");

print("hello world!".charAt(11) === "!");

print("hello world!".charAt(12) === "");


print("hello\u000B\u000C\u0020\u00A0world!".charAt(8) === "\u00A0");

print("hello\uD834\uDF06world!".charAt(6) === "\uDF06");

print("hell\u006F\u006F w\u006F\u006Frld!".charAt(8) === "\u006F");

print("\u00A9\u006F".charAt(2) === "");


print("hello world!".charAt(-1) === "");

print("hello world!".charAt(-9999999) === "");

print("hello world!".charAt(-0) === "h");


print("hello world!".charAt(undefined) === "h");


print("hello world!".charAt(true) === "e");

print("hello world!".charAt(false) === "h");


try {
  String.prototype.charAt.call(undefined);
  print(false);
} catch(e) {
  print(e instanceof TypeError);
}


try {
  String.prototype.charAt.call(null);
  print(false);
} catch(e) {
  print(e instanceof TypeError);
}


try {
  print(true.charAt() === "");
  print(false);
} catch (e) {
  print(e instanceof TypeError);
}


try {
  print(String.prototype.charAt.call(null, 0) === "");
  print(false);
} catch (e) {
  print(e instanceof TypeError);
}


print(String.prototype.charAt.call(true, 1) === "r");


var test_object = {firstName:"John", lastName:"Doe"};
print(String.prototype.charAt.call(test_object, 1) === "o");


print(String.prototype.charAt.call(123, 2) === "3");
