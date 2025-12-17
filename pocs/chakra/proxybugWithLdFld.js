function test() {
    var count = 0;
    function leaf() {
    }
    var obj0 = {};
    var func1 = function () {
        for (var _strvar0 in ui8) {
            ary.unshift(this.prop0 + this.prop0);
        }
    };
    var ary = Array();
    var ui8 = new Uint8Array(1);
    var proxyHandler = {};
    proxyHandler['get'] = function () {
        count++;
    };
    obj0 = new Proxy(obj0, proxyHandler);
    ({ prop1: !func1.call(obj0, leaf, '!') });
    if (count != 2)
        print("FAIL");
    else
        print("PASS");
}
test();