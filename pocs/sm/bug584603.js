var f = 99;

function g(a) {
    if (a) {
        var e = 55;
        function f() {
            print("f");
        }
        print(f == 99, false);
    }
}

g(true);
