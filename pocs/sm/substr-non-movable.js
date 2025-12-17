function f(from, expected) {
  for (let i = 0; i < 100; ++i) {
    print("abcdefgh".slice(from), expected);
  }   
}
f(1, "bcdefgh");
f(-1, "h");
