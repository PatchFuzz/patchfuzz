function f() {
    for (var i=0; i<9; i++)
        print("" + f, expected);
}

var expected = "" + f;
f();
