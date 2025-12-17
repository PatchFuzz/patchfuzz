function test() {
    var re = /abc(.+)z/;
    for (var i = 0; i < 100; i++) {
        print(re.exec(newRope("abcdefghijklmnopqrstuvw", "xyz"))[1], "defghijklmnopqrstuvwxy");
        print(re.test(newRope("abcdefghijklmnopqrstuvw", "xyz")), true);
        print(re[Symbol.search](newRope(".abcdefghijklmnopqrstuvw", "xyz")), 1);
        print(re[Symbol.match](newRope("abcdefghijklmnopqrstuvw", "xyz"))[1], "defghijklmnopqrstuvwxy");
    }
}
test();
