

assert (Object.prototype.toString.call (String.prototype) === '[object String]');
assert (String.prototype.toString() === "");

assert (Object.prototype.toString.call (Boolean.prototype) === '[object Boolean]');
assert (Boolean.prototype.valueOf() === false);

assert (Object.prototype.toString.call (Number.prototype) === '[object Number]');
assert (Number.prototype.valueOf() === 0);

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
  assert (Object.prototype.toString.call (proto) === '[object Object]');
}

try {
  Date.prototype.valueOf();
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}

try {
  RegExp.prototype.exec("");
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}

try {
  RegExp.prototype.compile("a", "u");
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}

assert (RegExp.prototype.source === '(?:)');
assert (RegExp.prototype.global === undefined);
assert (RegExp.prototype.ignoreCase === undefined);
assert (RegExp.prototype.multiline === undefined);
assert (RegExp.prototype.sticky === undefined);
assert (RegExp.prototype.unicode === undefined);
assert (RegExp.prototype.dotAll === undefined);
assert (RegExp.prototype.flags === '');
