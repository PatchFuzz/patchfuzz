function testBailout() {
    function f(v, r) {
        for (var i = 0; i < 50; ++i) {
            
            
            if (i === 0) {
                r();
            }
            String.fromCodePoint(v);
            String.fromCodePoint(v);
            String.fromCodePoint(v);
        }
    }

    var result = [];
    function r() {
        result.push("ok");
    }

    do {
        result.length = 0;
        try {
            f(0, r);
            f(0, r);
            f(0x10ffff + 1, r);
        } catch (e) {}
        print(result.length, 3);
    } while (!inIon());
}
testBailout();
