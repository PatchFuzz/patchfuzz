function foo(a) {
  for (var o = 1; o < 2; o++) {
    for (var n = 1; n < 2; n++) {
      for (var m = 1; m < 2; m++) {
        for (var l = 1; l < 2; l++) {
          for (var i = 1; i < 2; i++) {
            for (var j = 1; j < 2; j++) {
              for (var k = 1; k < 2; k++) {
                var z = a.foo;
                z.foo = i * j * k * m * n * o;
              }
            }
          }
        }
      }
    }
  }
}

foo({foo: {foo: 1}});
