













"use strict"
try {
  eval("var $ = function yield() {}");
  assert(false);
} catch (e) {
  assert(e instanceof SyntaxError);
}
