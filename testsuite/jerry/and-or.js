













function fail() {
  assert (0);
  return true;
}

if (false && fail()) {
  assert (0);
}

if (true && false && fail()) {
  assert (0);
}

if (true || fail()) {
} else {
  assert (0);
}

if (false || true || fail()) {
} else {
  assert (0);
}
