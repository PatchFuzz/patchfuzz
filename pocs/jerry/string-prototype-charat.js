function length_configurable()
{
  function is_es51() {
    return (typeof g === "function");
    { function g() {} }
  }
  return is_es51() ? false : true;
}

assert(Object.getOwnPropertyDescriptor(String.prototype.charAt, 'length').configurable === length_configurable());

assert(Object.getOwnPropertyDescriptor(String.prototype.charAt, 'length').enumerable === false);

assert(Object.getOwnPropertyDescriptor(String.prototype.charAt, 'length').writable === false);

assert(String.prototype.charAt.length === 1);


assert(String.prototype.charAt.call(new String()) === "");


assert("hello world!".charAt(NaN) === "h");


assert(String.prototype.charAt.call({})  === "[");


assert("hello world!".charAt(0) === "h");

assert("hello world!".charAt(1) === "e");


assert("hello world!".charAt(-Infinity) === "");

assert("hello world!".charAt(Infinity) === "");

assert("hello world!".charAt(11) === "!");

assert("hello world!".charAt(12) === "");


assert("hello\u000B\u000C\u0020\u00A0world!".charAt(8) === "\u00A0");

assert("hello\uD834\uDF06world!".charAt(6) === "\uDF06");

assert("hell\u006F\u006F w\u006F\u006Frld!".charAt(8) === "\u006F");

assert("\u00A9\u006F".charAt(2) === "");


assert("hello world!".charAt(-1) === "");

assert("hello world!".charAt(-9999999) === "");

assert("hello world!".charAt(-0) === "h");


assert("hello world!".charAt(undefined) === "h");


assert("hello world!".charAt(true) === "e");

assert("hello world!".charAt(false) === "h");


try {
  String.prototype.charAt.call(undefined);
  assert(false);
} catch(e) {
  assert(e instanceof TypeError);
}


try {
  String.prototype.charAt.call(null);
  assert(false);
} catch(e) {
  assert(e instanceof TypeError);
}


try {
  assert(true.charAt() === "");
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}


try {
  assert(String.prototype.charAt.call(null, 0) === "");
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}


assert(String.prototype.charAt.call(true, 1) === "r");


var test_object = {firstName:"John", lastName:"Doe"};
assert(String.prototype.charAt.call(test_object, 1) === "o");


assert(String.prototype.charAt.call(123, 2) === "3");
