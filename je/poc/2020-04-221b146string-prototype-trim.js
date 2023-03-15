















function length_configurable()
{
  function is_es51() {
    return (typeof g === "function");
    { function g() {} }
  }
  return is_es51() ? false : true;
}

print(Object.getOwnPropertyDescriptor(String.prototype.trim, 'length').configurable === length_configurable());

print(Object.getOwnPropertyDescriptor(String.prototype.trim, 'length').enumerable === false);

print(Object.getOwnPropertyDescriptor(String.prototype.trim, 'length').writable === false);

print(String.prototype.trim.length === 0);


print(String.prototype.trim.call(new String()) === "");

print(String.prototype.trim.call({}) === "[object Object]");


try {
  String.prototype.trim.call(undefined);
  print(false);
} catch(e) {
  print(e instanceof TypeError);
}


try {
  String.prototype.trim.call(null);
  print(false);
} catch(e) {
  print(e instanceof TypeError);
}


print(" hello world".trim() === "hello world");

print("hello world ".trim() === "hello world");

print("    hello world   ".trim() === "hello world");

print("\t  hello world\n".trim() === "hello world");

print("\t\n  hello world\t \n ".trim() === "hello world");

print("hello world\n   \t\t".trim() === "hello world");

print(" hello world \\ ".trim() === "hello world \\");

print("**hello world**".trim() === "**hello world**");

print(" \t \n".trim() === "");

print("          ".trim() === "");

print("".trim() === "");

print("\uf389".trim() === "\uf389");
print(String.prototype.trim.call('\uf389') === "\uf389");
print("\u20291\u00D0".trim() === "1\u00D0");
print("\u20291\u00A0".trim() === "1");

print("\u0009\u000B\u000C\u0020\u00A01".trim() === "1");
print("\u000A\u000D\u2028\u202911".trim() === "11");

print("\u0009\u000B\u000C\u0020\u00A01\u0009\u000B\u000C\u0020\u00A0".trim() === "1");
print("\u000A\u000D\u2028\u202911\u000A\u000D\u2028\u2029".trim() === "11");

print("\u200B".trim() === '\u200B')
print("\u200A".trim() === '')
print("\u00A0".trim() === '')

var test = "  asd  ";
print(test.trimStart() === "asd  ")
print(test.trimStart().length === 5)
print(test.trimLeft() === "asd  ")
print(test.trimLeft().length === 5)
print(String.prototype.trimStart === String.prototype.trimLeft)

print(test.trimEnd() === "  asd")
print(test.trimEnd().length === 5)
print(test.trimRight() === "  asd")
print(test.trimRight().length === 5)
print(String.prototype.trimEnd === String.prototype.trimRight)

print(test.trim() === "asd")
print(test.trim().length === 3)
