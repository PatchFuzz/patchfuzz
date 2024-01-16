













try {
  typeof(a);
  let a;
  assert (false);
} catch (e) {
  assert (e instanceof ReferenceError);
}
