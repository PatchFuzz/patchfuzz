for (var i=0; i<4; i++) {
  (function () {
    (function () {
      (function () {
        var x;
        y = x++;
      })();
    })();
  })();
}

print(NaN, y);
