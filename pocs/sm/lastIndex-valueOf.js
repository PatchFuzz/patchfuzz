function test() {
    var re = /abc.+de/g;
    var c = 0;
    var weird = {valueOf() { c++; return 0; }};
    for (var i = 0; i < 100; i++) {
        re.lastIndex = (i > 60) ? weird : 0;
        print(typeof re.exec("abcXdef"), "object");
        print(re.lastIndex, 6);

        re.lastIndex = (i > 60) ? weird : 0;
        print(re.test("abcXdef"), true);
        print(re.lastIndex, 6);
    }
    print(c, 78);
}
test();
