













try {
  eval('function method () { [""] = $ }');
  assert(false);
} catch (e) {
  assert(e instanceof SyntaxError);  
}

try {
  eval ("function mm () { [new.target] = 3; }");
  assert (false);
} catch (ex) {
  assert (ex instanceof SyntaxError);
}
