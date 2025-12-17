function exists() {
  var a = {'null': 0, 'undefined': 0};
  for (var i = 0; i < 100; i++) {
    print(null in a, true);
    print(undefined in a, true);
  }
}

function missing() {
  var a = {};
  for (var i = 0; i < 100; i++) {
    print(null in a, false);
    print(undefined in a, false);
  }
}

function mixed() {
  var x = [{'null': 0}, {'undefined': 0}]
  for (var i = 0; i < 100; i++) {
    var a = x[i % 2];
    print(null in a, i % 2 == 0);
    print(undefined in a, i % 2 == 1);
  }
}

exists();
missing();
mixed();
