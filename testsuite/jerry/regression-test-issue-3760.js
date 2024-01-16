













var split = RegExp.prototype[Symbol.split];

try {
  split.call({[Symbol.match]: "g"});
  assert(false);
} catch (ex) {
  assert(ex instanceof SyntaxError);
}
