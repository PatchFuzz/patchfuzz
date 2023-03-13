















function length_configurable()
{
  function is_es51() {
    return (typeof g === "function");
    { function g() {} }
  }
  return is_es51() ? false : true;
}

print(Object.getOwnPropertyDescriptor(String.prototype.charCodeAt, 'length').configurable === length_configurable());

print(Object.getOwnPropertyDescriptor(String.prototype.charCodeAt, 'length').enumerable === false);

print(Object.getOwnPropertyDescriptor(String.prototype.charCodeAt, 'length').writable === false);

print(String.prototype.charCodeAt.length === 1);


print(isNaN(String.prototype.charCodeAt.call(new String())));


print(String.prototype.charCodeAt.call({}) === 91);


print("hello world!".charCodeAt(0) === 104);

print("hello world!".charCodeAt(1) === 101);

print("HELLO WORLD".charCodeAt(10) === 68);


print(isNaN("hello world!".charCodeAt(-Infinity)));

print(isNaN("hello world!".charCodeAt(Infinity)));

print("hello world!".charCodeAt(11) === 33);

print(isNaN("hello world!".charCodeAt(12)));


print("hello\u000B\u000C\u0020\u00A0world!".charCodeAt(8) === 160);

print("hello\uD834\uDF06world!".charCodeAt(6) === 57094);

print("hell\u006F\u006F w\u006F\u006Frld!".charCodeAt(8) === 111);

print(isNaN("\u00A9\u006F".charCodeAt(2)));


print(isNaN("hello world!".charCodeAt(-1)));

print(isNaN("hello world!".charCodeAt(-9999999)));

print("hello world!".charCodeAt(-0) === 104);


print("hello world!".charCodeAt(undefined) === 104);


print("hello world!".charCodeAt(true) === 101);

print("hello world!".charCodeAt(false) === 104);


print(isNaN("hello world!".charCodeAt(4294967299)));


try {
  print(isNaN(String.prototype.charCodeAt.call(undefined)));
  print(false);
} catch (e) {
  print(e instanceof TypeError);
}


try {
  print(isNaN(String.prototype.charCodeAt.call(null, 0)));
  print(false);
} catch (e) {
  print(e instanceof TypeError);
}


print(String.prototype.charCodeAt.call(true, 1) === 114);
print(String.prototype.charCodeAt.call(true) === 116);


var test_object = {firstName:"John", lastName:"Doe"};
print(String.prototype.charCodeAt.call(test_object, 1) === 111);


print(String.prototype.charCodeAt.call(123, 2) === 51);
