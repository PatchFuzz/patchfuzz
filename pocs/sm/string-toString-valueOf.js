function simple(str) {
  print(str.toString(), "abc");
  print(str.valueOf(), "abc");
}

function obj(str) {
  var obj = new String(str);
  print(obj.toString(), "xyz");
  print(obj.valueOf(), "xyz");
}

function mixed() {
  for (var v of ["abc", new String("abc")]) {
    print(v.toString(), "abc");
    print(v.valueOf(), "abc");
  }
}

for (var i = 0; i < 100; i++) {
  simple("abc");
  obj("xyz");
  mixed();
}