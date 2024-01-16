













var a = [3.3, 2.2, 1];

try {
a.sort(function() {
    var o = new Proxy({
        get foo() {
            return eval("function");
        },
        set foo(arg) {
            return s2 = s3
        }
    }, {
        has: true,
        get: function() {
            a = true;
            return 30;
        }
    });
    o.x = 43;
    var result = "";
    for (var p in o)
        result += o[p];
});
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}
