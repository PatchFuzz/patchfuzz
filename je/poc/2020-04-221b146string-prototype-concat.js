















function length_configurable()
{
  function is_es51() {
    return (typeof g === "function");
    { function g() {} }
  }
  return is_es51() ? false : true;
}

print(Object.getOwnPropertyDescriptor(String.prototype.concat, 'length').configurable === length_configurable());

print(Object.getOwnPropertyDescriptor(String.prototype.concat, 'length').enumerable === false);

print(Object.getOwnPropertyDescriptor(String.prototype.concat, 'length').writable === false);


var s1 = "Hello ";
var s2 = "world!";
var s3 = " ";
print(s1.concat(s2, s3, 3, 10, "  ", ".") === "Hello world! 310  .");
print("Hello ".concat(s1) === "Hello Hello ");

print(s1.concat(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9) === "Hello 012345678901234567890123456789");

print("".concat() === "");


print("\u0041".concat("\u0041", "\u1041") === "\u0041\u0041\u1041");
print("\u0041\u1D306A".concat("\u0041", "\u1041") === "\u0041\u1D306A\u0041\u1041");


var y;
print("Check ".concat(y) === "Check undefined");


var y = {};
y.toString = function () { throw new ReferenceError ("foo");}
y.concat = String.prototype.concat;
try {
  y.concat("cat");
  print(false);
} catch (e) {
  print(e instanceof ReferenceError);
}


var x = {};
x.toString = function () { throw new ReferenceError ("foo");}
try {
  "a".concat(x);
  print(false);
} catch (e) {
  print(e instanceof ReferenceError);
}
