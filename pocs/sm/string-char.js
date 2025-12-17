function f(x) {
  print(x.charCodeAt(1), 0x62);
  print(x.charAt(1), "b");
  print(x[1], "b");
}

function g() {
  for (var i = 0; i < 100; i++) {
    f("abc");
  }
}

for (var j = 0; j < 10; j++) {
  g();
}
