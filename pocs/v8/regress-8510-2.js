try {
  (function () {
    eval(`
      function print() {}
      (function foo() {
        var x = 1;
        print();
        throw new Error();
      })();
    `);
  })();
} catch (e) {
  print(e.stack);
}

try {
  (function () {
    var assertLocation = 2;
    (function () {
      eval(`
        function print() {}
        (function foo() {
          var x = 1;
          print();
          throw new Error();
        })();
      `);
    })();
  })();
} catch (e) {
  print(e.stack);
}
