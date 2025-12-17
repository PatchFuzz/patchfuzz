try {
  new RegExp("\{{91406,456}");
  assert(false);
} catch(e) {
  assert(e instanceof SyntaxError)
}

try {
  new RegExp("\{91406,456}");
  assert(false);
} catch(e) {
  assert(e instanceof SyntaxError)
}

try {
  new RegExp("\({91406,456}");
  assert(false);
} catch(e) {
  assert(e instanceof SyntaxError)
}
