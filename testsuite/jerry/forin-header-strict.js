

'use strict';
try {
  eval('for (var i = 0 in {}) {}');
  assert(false);
} catch(e) {
  assert(e instanceof SyntaxError);
}

try {
  eval('for (var = i of {}) {}');
  assert(false);
} catch (e) {
  assert(e instanceof SyntaxError);
}

var reached = false;

for (var i in {}) {
  reached = true;
}
assert(!reached);

for (var i of []) {
  reached = true;
}
assert(!reached);

for (let i in {}) {
  reached = true;
}
assert(!reached);

for (let i of []) {
  reached = true;
}
assert(!reached);

for (const i in {}) {
  reached = true;
}
assert(!reached);

for (const i of []) {
  reached = true;
}
assert(!reached);
