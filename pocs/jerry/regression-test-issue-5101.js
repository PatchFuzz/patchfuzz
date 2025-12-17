var iter = 100;
async function f0() {
    iter--;
    function f6() {
        return f0;
    }
    var proxy_handler = {
        "get": f0,
    };

    f0.__proto__ = new Proxy(f6, proxy_handler);

    if ((iter >= 0)) {
        var v12 = f0();
    }
    return f0;
}
f0();
