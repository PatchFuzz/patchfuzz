













try {
  eval("");
}
catch (e) {
  assert (false);
}

assert ("x\0y" !== "x\0z");
