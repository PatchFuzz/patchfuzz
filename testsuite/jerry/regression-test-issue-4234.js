

try {
  1 < Symbol(1)
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}

try {
  Symbol(1) < 1
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}

try {
  1n < Symbol(1)
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}

try {
  Symbol(1) < 1n
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}
