













function f_simple () {
}

function f_strict () {
  "use strict";
}

try {
  Function.prototype["arguments"];
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}

assert(f_simple["arguments"] === null);

try {
  f_strict["arguments"];
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}

let desc = Object.getOwnPropertyDescriptor(f_simple, "arguments");
assert(desc.value === null);
assert(desc.writable === false);
assert(desc.enumerable === false);
assert(desc.configurable === false);
assert(Object.getOwnPropertyDescriptor(f_strict, "arguments") === undefined);

try {
  Function.prototype["caller"];
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}

assert(f_simple["caller"] === undefined);

try {
  f_strict["caller"];
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}

desc = Object.getOwnPropertyDescriptor(f_simple, "caller");
assert(desc.value === undefined);
assert(desc.writable === false);
assert(desc.enumerable === false);
assert(desc.configurable === false);
assert(Object.getOwnPropertyDescriptor(f_strict, "arguments") === undefined);
