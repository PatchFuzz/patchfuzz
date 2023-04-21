















function length_configurable()
{
  function is_es51() {
    return (typeof g === "function");
    { function g() {} }
  }
  return is_es51() ? false : true;
}

print(Object.getOwnPropertyDescriptor(String.prototype.substr, 'length').configurable === length_configurable());

print(Object.getOwnPropertyDescriptor(String.prototype.substr, 'length').enumerable === false);

print(Object.getOwnPropertyDescriptor(String.prototype.substr, 'length').writable === false);

print(String.prototype.substr.length === 2);

print(String.prototype.substr.call(new String()) === "");

print(String.prototype.substr.call({}) === "[object Object]");


try {
  String.prototype.substr.call(undefined);
  print(false);
} catch(e) {
  print(e instanceof TypeError);
}


try {
  String.prototype.substr.call(null);
  print(false);
} catch(e) {
  print(e instanceof TypeError);
}


print("Hello world!".substr(0, 11) === "Hello world");

print("Hello world!".substr(11, 0) === "");

print("Hello world!".substr(0, 12) === "Hello world!");

print("Hello world!".substr(12, 0) === "");

print("Hello world!".substr(NaN, 12) === "Hello world!");


print("Hello world!".substr(2, NaN) === "");


print("Hello world!".substr(2, undefined) === "llo world!");


print("Hello world!".substr(-1,8) === "!");


print("Hello\tworld!".substr(5,-8) === "");


print("Hello world!".substr(-1,-8) === "");


print("Hello world!".substr(-1,10000) === "!");

print("Hello world!".substr(10000,1000000) === "");

print("Hello world!".substr(100000,1) === "");


print("Hello world!".substr(undefined, undefined) === "Hello world!");

var undef_var;
print("Hello world!".substr(undef_var, undef_var) === "Hello world!");


print("Hello world!".substr(undefined, 5) === "Hello");

print("Hello world!".substr(undefined, "bar") === "");

print("Hello world!".substr(2, true) === "l");

print("Hello world!".substr(2, false) === "");

print("Hello world!".substr(5, obj) === " world!");


var obj = { substr : String.prototype.substr }

obj.toString = function() {
    return "Iam";
}
print(obj.substr(0,1) === "I");

obj.toString = function() {
  throw new ReferenceError ("foo");
};

try {
  print(obj.substr(100000,1));
  print(false);
} catch (e) {
  print(e.message === "foo");
  print(e instanceof ReferenceError);
}


try {
  print(true.substr() === "");
  print(false);
} catch (e) {
  print(e instanceof TypeError);
}


try {
  print(String.prototype.substr.call(null, 0, 1) === "");
  print(false);
} catch (e) {
  print(e instanceof TypeError);
}


print(String.prototype.substr.call(true, 0, 1) === "t");


var test_object = {firstName:"John", lastName:"Doe"};
print(String.prototype.substr.call(test_object, 0, 7) === "[object");


print(String.prototype.substr.call(123, 0, 3) === "123");
