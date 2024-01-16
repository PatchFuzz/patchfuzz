















function length_configurable()
{
  function is_es51() {
    return (typeof g === "function");
    { function g() {} }
  }
  return is_es51() ? false : true;
}

assert(Object.getOwnPropertyDescriptor(String.prototype.substr, 'length').configurable === length_configurable());

assert(Object.getOwnPropertyDescriptor(String.prototype.substr, 'length').enumerable === false);

assert(Object.getOwnPropertyDescriptor(String.prototype.substr, 'length').writable === false);

assert(String.prototype.substr.length === 2);

assert(String.prototype.substr.call(new String()) === "");

assert(String.prototype.substr.call({}) === "[object Object]");


try {
  String.prototype.substr.call(undefined);
  assert(false);
} catch(e) {
  assert(e instanceof TypeError);
}


try {
  String.prototype.substr.call(null);
  assert(false);
} catch(e) {
  assert(e instanceof TypeError);
}


assert("Hello world!".substr(0, 11) === "Hello world");

assert("Hello world!".substr(11, 0) === "");

assert("Hello world!".substr(0, 12) === "Hello world!");

assert("Hello world!".substr(12, 0) === "");

assert("Hello world!".substr(NaN, 12) === "Hello world!");


assert("Hello world!".substr(2, NaN) === "");


assert("Hello world!".substr(2, undefined) === "llo world!");


assert("Hello world!".substr(-1,8) === "!");


assert("Hello\tworld!".substr(5,-8) === "");


assert("Hello world!".substr(-1,-8) === "");


assert("Hello world!".substr(-1,10000) === "!");

assert("Hello world!".substr(10000,1000000) === "");

assert("Hello world!".substr(100000,1) === "");


assert("Hello world!".substr(undefined, undefined) === "Hello world!");

var undef_var;
assert("Hello world!".substr(undef_var, undef_var) === "Hello world!");


assert("Hello world!".substr(undefined, 5) === "Hello");

assert("Hello world!".substr(undefined, "bar") === "");

assert("Hello world!".substr(2, true) === "l");

assert("Hello world!".substr(2, false) === "");

assert("Hello world!".substr(5, obj) === " world!");


var obj = { substr : String.prototype.substr }

obj.toString = function() {
    return "Iam";
}
assert(obj.substr(0,1) === "I");

obj.toString = function() {
  throw new ReferenceError ("foo");
};

try {
  assert(obj.substr(100000,1));
  assert(false);
} catch (e) {
  assert(e.message === "foo");
  assert(e instanceof ReferenceError);
}


try {
  assert(true.substr() === "");
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}


try {
  assert(String.prototype.substr.call(null, 0, 1) === "");
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}


assert(String.prototype.substr.call(true, 0, 1) === "t");


var test_object = {firstName:"John", lastName:"Doe"};
assert(String.prototype.substr.call(test_object, 0, 7) === "[object");


assert(String.prototype.substr.call(123, 0, 3) === "123");
