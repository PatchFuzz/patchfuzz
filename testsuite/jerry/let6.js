

try {
  let a = 1;
  eval ("assert(a === 1)");
} catch (e) {
  assert (false);
}

assert (typeof a === "undefined");

try {
  let a = 2;
  eval ("assert(a === 2)");

  assert (typeof b === "undefined");
  throw 3;
} catch (e) {
  let b = e;
  eval ("assert(b === 3)");

  assert (typeof a === "undefined");
}

assert (typeof a === "undefined");
assert (typeof b === "undefined");

try {
  let a = 4;
  eval ("assert(a === 4)");

  assert (typeof b === "undefined");
} finally {
  let b = 5;
  eval ("assert(b === 5)");

  assert (typeof a === "undefined");
}

assert (typeof a === "undefined");
assert (typeof b === "undefined");

try {
  let a = 6;
  eval ("assert(a === 6)");

  assert (typeof b === "undefined");
  assert (typeof c === "undefined");
  throw 7;
} catch (e) {
  let b = e;
  eval ("assert(b === 7)");

  assert (typeof a === "undefined");
  assert (typeof c === "undefined");
} finally {
  let c = 8;
  eval ("assert(c === 8)");

  assert (typeof a === "undefined");
  assert (typeof b === "undefined");
}

assert (typeof a === "undefined");
assert (typeof b === "undefined");
assert (typeof c === "undefined");
