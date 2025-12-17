function test() {
    var str = "()?".repeat(32767);
    var re = new RegExp(str);
    for (var i = 0; i < 10; i++) {
        var res = re.exec(str);
        print(res.length, 32768);
        print(res[0], "");
        print(res[1], undefined);
        print(res[32767], undefined);
    }
}
test();
