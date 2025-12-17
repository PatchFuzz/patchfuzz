function test() {
    var re = /abc.+de/;
    var c = 0;
    for (var i = 0; i < 100; i++) {
        print(re.test("abcXdef"), true);
        if (i === 60) {
            RegExp.prototype.exec = () => { c++; return {}; };
        }
    }
    print(c, 39);
}
test();
