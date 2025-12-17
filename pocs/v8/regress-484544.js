function f() {
  return [[], [], [[], [], []]];
}

for (var i=0; i<10000; i++) {
  f();
}
