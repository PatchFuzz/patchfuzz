try {
  assert(!({} instanceof assert));
} catch(e) {
  assert(false);
}

try {
  ({} instanceof Math.sin);
  assert(false);
} catch(e) {
  assert(e instanceof TypeError);
}

Math.sin.prototype = {}

try {
  assert(!({} instanceof Math.sin));
} catch(e) {
  assert(false);
}
