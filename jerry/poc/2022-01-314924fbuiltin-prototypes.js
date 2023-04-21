

print(Object.prototype.toString.call (String.prototype) === '[object String]');
print(String.prototype.toString() === "");

print(Object.prototype.toString.call (Boolean.prototype) === '[object Boolean]');
print(Boolean.prototype.valueOf() === false);

print(Object.prototype.toString.call (Number.prototype) === '[object Number]');
print(Number.prototype.valueOf() === 0);

var prototypes = [
    Date.prototype,
    RegExp.prototype,
    Error.prototype,
    EvalError.prototype,
    RangeError.prototype,
    ReferenceError.prototype,
    SyntaxError.prototype,
    TypeError.prototype,
    URIError.prototype
  ]

for (proto of prototypes) {
  print(Object.prototype.toString.call (proto) === '[object Object]');
}

try {
  Date.prototype.valueOf();
  print(false);
} catch (e) {
  print(e instanceof TypeError);
}

try {
  RegExp.prototype.exec("");
  print(false);
} catch (e) {
  print(e instanceof TypeError);
}

try {
  RegExp.prototype.compile("a", "u");
  print(false);
} catch (e) {
  print(e instanceof TypeError);
}

print(RegExp.prototype.source === '(?:)');
print(RegExp.prototype.global === undefined);
print(RegExp.prototype.ignoreCase === undefined);
print(RegExp.prototype.multiline === undefined);
print(RegExp.prototype.sticky === undefined);
print(RegExp.prototype.unicode === undefined);
print(RegExp.prototype.dotAll === undefined);
print(RegExp.prototype.flags === '');
