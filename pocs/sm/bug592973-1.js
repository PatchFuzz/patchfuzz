function f(x) {
    if (x) {
        let y;
        y = 12;
        (function () {
          print(y, 12);
        })();
    }
}
f(1);

