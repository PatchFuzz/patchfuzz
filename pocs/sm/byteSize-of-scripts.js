function f1() {
  return 42;
}

print("byteSizeOfScript(f1) = " + byteSizeOfScript(f1));
print(byteSizeOfScript(f1) > 1, true);

function f2(n) {
  var obj = {
    x: 1,
    y: 2,
    z: 3,
  };

  if (i % 2 == 0) {
    for (var i = 0; i < n; i++) {
      (function() {
        this.x += i;
        print(String(i));
        obj[i] = i * i;
        if (i > 10) {
          f2(i / f1());
        }
      })();
    }
  }

  if (i % 3 == 0) {
    for (var i = 0; i < n; i++) {
      (function() {
        this.x *= i;
        print(String(i));
        obj[i] = i * i;
        if (i > 10) {
          f2(i / f1());
        }
      })();
    }
  }

  return this.x;
}

print("byteSizeOfScript(f2) = " + byteSizeOfScript(f2));
print(byteSizeOfScript(f2) > 1, true);
print(byteSizeOfScript(f2) > byteSizeOfScript(f1), true);
