try {
  eval('if (true) /abc/.exec("abc");');
} catch (e) {
  assert (false);
}

try {
  eval('if (true) {} /abc/.exec("abc");');
} catch (e) {
  assert (false);
}

try {
  eval('var a\n/abc/.exec("abc");');
} catch (e) {
  assert (false);
}
