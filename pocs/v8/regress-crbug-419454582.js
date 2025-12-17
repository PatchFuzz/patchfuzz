class C extends String {
  m() { return super.length; }
}

for (let i = 0; i < 5; i++) {
  print(0, C.prototype.m.call("abc"));
}
