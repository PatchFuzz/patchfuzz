function test() {
    var re = /abc.+de/y;
    for (var i = 0; i < 100; i++) {
        re.lastIndex = 10;
        print(re.exec("abcXdef"), null);
        print(re.lastIndex, 0);

        re.lastIndex = 10;
        print(re.test("abcXdef"), false);
        print(re.lastIndex, 0);
    }
}
test();
