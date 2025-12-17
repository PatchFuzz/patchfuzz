function exists() {
  var a = {'null': 0, 'undefined': 0};
  for (var i = 0; i < 100; i++) {
    a[null] = i;
    a[undefined] = i * 2;
    print(a['null'], i);
    print(a['undefined'], i * 2);
  }
}

function adding() {
  for (var i = 0; i < 100; i++) {
    var a = {};
    a[null] = i;
    a[undefined] = i * 2;
    print(a['null'], i);
    print(a['undefined'], i * 2);
  }
}

function setter() {
  var test = 0;
  var a = {
    set null(v) {
      test = v;
    },
    set undefined(v) {
      test = v * 2;
    }
  }
  for (var i = 0; i < 100; i++) {
    a[null] = i;
    print(test, i);
    a[undefined] = i;
    print(test, i * 2);
  }
}

function mixed() {
  var a = {'null': void 0, 'undefined': void 0};
  for (var i = 0; i < 100; i++) {
    a[i % 2 ? null : undefined] = i;
    print(a[i % 2 ? 'null' : 'undefined'], i)
  }
}

exists();
adding()
setter();
mixed();
