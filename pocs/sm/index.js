function test() {
    var arr = new Int8Array(400);
    var idx = "384";

    arr[idx] = 9;
    print(arr[idx], 9);
    arr[idx] = 10;
    print(arr[384], 10);

    idx = "512";
    print(arr[idx], undefined);
    print(arr[(() => "byteLength")()], 400);

    var o = {};
    Object.defineProperty(o, idx, {value: 123});
    print(o[512], 123);

    var propLatin1 = "foobar";
    o[propLatin1] = 3;
    print(o.foobar, 3);

    var propTwoByte = "foobar\u1200";
    o[propTwoByte] = 4;
    print(o.foobar\u1200, 4);
}
test();
