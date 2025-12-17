print("".replace(/x/), "");
(function () {
    for (var i = 0; i < 2000; ++i) {
        print(/[^]/g.exec("abc")[0], "a");
    }
})()
