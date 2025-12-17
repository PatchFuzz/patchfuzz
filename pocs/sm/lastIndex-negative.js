function test() {
    var re = /abc.+de/g;
    for (var i = 0; i < 100; i++) {
        re.lastIndex = (i > 60) ? -1 : 0;
        print(typeof re.exec("abcXdef"), "object");
        print(re.lastIndex, 6);

        re.lastIndex = (i > 60) ? -1 : 0;
        print(re.test("abcXdef"), true);
        print(re.lastIndex, 6);
    }
}
test();
