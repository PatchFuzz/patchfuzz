















function length_configurable()
{
  function is_es51() {
    return (typeof g === "function");
    { function g() {} }
  }
  return is_es51() ? false : true;
}

print(Object.getOwnPropertyDescriptor(String.prototype.substring, 'length').configurable === length_configurable());

print(Object.getOwnPropertyDescriptor(String.prototype.substring, 'length').enumerable === false);

print(Object.getOwnPropertyDescriptor(String.prototype.substring, 'length').writable === false);

print(String.prototype.substring.length === 2);

print(String.prototype.substring.call(new String()) === "");

print(String.prototype.substring.call({}) === "[object Object]");


try {
  String.prototype.substring.call(undefined);
  print(false);
} catch(e) {
  print(e instanceof TypeError);
}


try {
  String.prototype.substring.call(null);
  print(false);
} catch(e) {
  print(e instanceof TypeError);
}


print("hello world!".substring(0, 11) === "hello world");

print("hello world!".substring(11, 0) === "hello world");

print("hello world!".substring(0, 12) === "hello world!");

print("hello world!".substring(12, 0) === "hello world!");


print("hello world!".substring(NaN, 12) === "hello world!");


print("hello world!".substring(2, NaN) === "he");


print("hello world!".substring(2, undefined) === "llo world!");


print("hello world!".substring(-1,8) === "hello wo");


print("hello\tworld!".substring(5,-8) === "hello");


print("hello world!".substring(-1,-8) === "");


print("hello world!".substring(-1,10000) === "hello world!");

print("hello world!".substring(10000,1000000) === "");

print("hello world!".substring(100000,1) === "ello world!");


print("hello world!".substring(undefined, undefined) === "hello world!");

var undef_var;
print("hello world!".substring(undef_var, undef_var) === "hello world!");


print("hello world!".substring(undefined, 5) === "hello");

print("hello world!".substring(undefined, "bar") === "");

print("hello world!".substring(2, true) === "e");

print("hello world!".substring(2, false) === "he");

print("hello world!".substring(5, obj) === " world!");


var obj = { substring : String.prototype.substring }

obj.toString = function() {
    return "Iam";
}
print(obj.substring(100000,1) === "am");

obj.toString = function() {
  throw new ReferenceError ("foo");
};

try {
  print(obj.substring(100000,1));
  print(false);
} catch (e) {
  print(e.message === "foo");
  print(e instanceof ReferenceError);
}


try {
  print(true.substring() === "");
  print(false);
} catch (e) {
  print(e instanceof TypeError);
}


try {
  print(String.prototype.substring.call(null, 0, 1) === "");
  print(false);
} catch (e) {
  print(e instanceof TypeError);
}


print(String.prototype.substring.call(true, 0, 1) === "t");


var test_object = {firstName:"John", lastName:"Doe"};
print(String.prototype.substring.call(test_object, 0, 7) === "[object");


print(String.prototype.substring.call(123, 0, 3) === "123");
