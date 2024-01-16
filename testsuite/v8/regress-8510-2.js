





try {
  (function () {
    eval(`
      function assertLocation() {}
      (function foo() {
        var x = 1;
        assertLocation();
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
        function assertLocation() {}
        (function foo() {
          var x = 1;
          assertLocation();
          throw new Error();
        })();
      `);
    })();
  })();
} catch (e) {
  print(e.stack);
}
