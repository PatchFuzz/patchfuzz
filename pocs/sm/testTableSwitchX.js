function test1() {
    var src =
        "var a = 0;\n" +
        "switch(x) {\n";
    for (var i=-1; i<4; i++) {
        src += (i >= 0) ?
                "case " + i + ":\n" :
                "default:\n";
        for (var j=0; j<1500; j++) {
            src += "a = " + i + ";";
        }
        src += "break;\n";
    }
    src += "}\n";
    src += "return a;";

    var f = new Function("x", src);
    print(f(0), 0);
    print(f(4), -1);
    print(f(), -1);
    print(f(1.1), -1);
    print(f(3), 3);
}
test1();
