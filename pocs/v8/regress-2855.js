function foo(a) {
  for (var i = 0; i < 100; ++i)
    a = new String(a);
  return a;
}

var expected = "hello";
for (var i = 0; i < 4; ++i) {
  if (i == 2) {
    String.prototype.valueOf = function() { return 42; }
    expected = "42";
  }
  print(expected, "" + foo("hello"));
}


var count = 0;
var x = new String("foo");
Object.defineProperty(x, "valueOf",
    { get: function() {
             count++;
             return function() {
                      return 11;
                    }
           }
    });
for (var i = 0; i < 3; i++) {
  print("11", "" + x);
  print(i + 1, count);
}
