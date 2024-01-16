















function length_configurable()
{
  function is_es51() {
    return (typeof g === "function");
    { function g() {} }
  }
  return is_es51() ? false : true;
}

assert(Object.getOwnPropertyDescriptor(String.prototype.substring, 'length').configurable === length_configurable());

assert(Object.getOwnPropertyDescriptor(String.prototype.substring, 'length').enumerable === false);

assert(Object.getOwnPropertyDescriptor(String.prototype.substring, 'length').writable === false);

assert(String.prototype.substring.length === 2);

assert(String.prototype.substring.call(new String()) === "");

assert(String.prototype.substring.call({}) === "[object Object]");


try {
  String.prototype.substring.call(undefined);
  assert(false);
} catch(e) {
  assert(e instanceof TypeError);
}


try {
  String.prototype.substring.call(null);
  assert(false);
} catch(e) {
  assert(e instanceof TypeError);
}


assert("hello world!".substring(0, 11) === "hello world");

assert("hello world!".substring(11, 0) === "hello world");

assert("hello world!".substring(0, 12) === "hello world!");

assert("hello world!".substring(12, 0) === "hello world!");


assert("hello world!".substring(NaN, 12) === "hello world!");


assert("hello world!".substring(2, NaN) === "he");


assert("hello world!".substring(2, undefined) === "llo world!");


assert("hello world!".substring(-1,8) === "hello wo");


assert("hello\tworld!".substring(5,-8) === "hello");


assert("hello world!".substring(-1,-8) === "");


assert("hello world!".substring(-1,10000) === "hello world!");

assert("hello world!".substring(10000,1000000) === "");

assert("hello world!".substring(100000,1) === "ello world!");


assert("hello world!".substring(undefined, undefined) === "hello world!");

var undef_var;
assert("hello world!".substring(undef_var, undef_var) === "hello world!");


assert("hello world!".substring(undefined, 5) === "hello");

assert("hello world!".substring(undefined, "bar") === "");

assert("hello world!".substring(2, true) === "e");

assert("hello world!".substring(2, false) === "he");

assert("hello world!".substring(5, obj) === " world!");


var obj = { substring : String.prototype.substring }

obj.toString = function() {
    return "Iam";
}
assert(obj.substring(100000,1) === "am");

obj.toString = function() {
  throw new ReferenceError ("foo");
};

try {
  assert(obj.substring(100000,1));
  assert(false);
} catch (e) {
  assert(e.message === "foo");
  assert(e instanceof ReferenceError);
}


try {
  assert(true.substring() === "");
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}


try {
  assert(String.prototype.substring.call(null, 0, 1) === "");
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}


assert(String.prototype.substring.call(true, 0, 1) === "t");


var test_object = {firstName:"John", lastName:"Doe"};
assert(String.prototype.substring.call(test_object, 0, 7) === "[object");


assert(String.prototype.substring.call(123, 0, 3) === "123");
