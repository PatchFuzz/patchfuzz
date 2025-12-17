function test() {
    var o = {x: 0};
    for (var i = 0; i < 10000; i++) {
        o.x++;
    }
    return o;
}
test();
