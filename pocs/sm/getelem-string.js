function test1() {
    function getchar(s, i) {
        return s[i];
    }
    for (var i=0; i<70; i++) {
        print(getchar("foo", 0), "f");
        print(getchar("bar", 2), "r");
    }
    print(getchar("foo", 3), undefined);
}
test1();
