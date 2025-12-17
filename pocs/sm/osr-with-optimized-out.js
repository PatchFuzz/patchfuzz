gcPreserveCode();

function f (n) {
    while (!inIon()) {
        var inner = 0;
        let x = {};
        for (var i = 0; i < n; i++) {
            inner += inIon() == true ? 1 : 0;
            if (inner <= 1)
                bailout();
        }
        print(inner != 1, true);
    }
}


f(300);
