function test() {
    var values = [undefined, null, Math, createIsHTMLDDA()];
    var expected = [true, true, false, true];

    for (var i=0; i<100; i++) {
        var idx = i % values.length;
        if (values[idx] == undefined)
            print(expected[idx], true);
        else
            print(expected[idx], false);

        if (null != values[idx])
            print(expected[idx], false);
        else
            print(expected[idx], true);
    }
}
test();
