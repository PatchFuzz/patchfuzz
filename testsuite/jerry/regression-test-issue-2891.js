














function f (name){
  delete this.keywords[name];
  assert (false);
}

try {
  f ("jerry");
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}
