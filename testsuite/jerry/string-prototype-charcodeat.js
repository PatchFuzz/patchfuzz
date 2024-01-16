















function length_configurable()
{
  function is_es51() {
    return (typeof g === "function");
    { function g() {} }
  }
  return is_es51() ? false : true;
}

assert(Object.getOwnPropertyDescriptor(String.prototype.charCodeAt, 'length').configurable === length_configurable());

assert(Object.getOwnPropertyDescriptor(String.prototype.charCodeAt, 'length').enumerable === false);

assert(Object.getOwnPropertyDescriptor(String.prototype.charCodeAt, 'length').writable === false);

assert(String.prototype.charCodeAt.length === 1);


assert(isNaN(String.prototype.charCodeAt.call(new String())));


assert(String.prototype.charCodeAt.call({}) === 91);


assert("hello world!".charCodeAt(0) === 104);

assert("hello world!".charCodeAt(1) === 101);

assert("HELLO WORLD".charCodeAt(10) === 68);


assert(isNaN("hello world!".charCodeAt(-Infinity)));

assert(isNaN("hello world!".charCodeAt(Infinity)));

assert("hello world!".charCodeAt(11) === 33);

assert(isNaN("hello world!".charCodeAt(12)));


assert("hello\u000B\u000C\u0020\u00A0world!".charCodeAt(8) === 160);

assert("hello\uD834\uDF06world!".charCodeAt(6) === 57094);

assert("hell\u006F\u006F w\u006F\u006Frld!".charCodeAt(8) === 111);

assert(isNaN("\u00A9\u006F".charCodeAt(2)));


assert(isNaN("hello world!".charCodeAt(-1)));

assert(isNaN("hello world!".charCodeAt(-9999999)));

assert("hello world!".charCodeAt(-0) === 104);


assert("hello world!".charCodeAt(undefined) === 104);


assert("hello world!".charCodeAt(true) === 101);

assert("hello world!".charCodeAt(false) === 104);


assert(isNaN("hello world!".charCodeAt(4294967299)));


try {
  assert(isNaN(String.prototype.charCodeAt.call(undefined)));
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}


try {
  assert(isNaN(String.prototype.charCodeAt.call(null, 0)));
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}


assert(String.prototype.charCodeAt.call(true, 1) === 114);
assert(String.prototype.charCodeAt.call(true) === 116);


var test_object = {firstName:"John", lastName:"Doe"};
assert(String.prototype.charCodeAt.call(test_object, 1) === 111);


assert(String.prototype.charCodeAt.call(123, 2) === 51);
