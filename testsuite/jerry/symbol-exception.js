

try {
  undefined[Symbol ("foo")];
  assert (false);
} catch (e) {
  
  assert (e instanceof TypeError);
}
