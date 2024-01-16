
timeout(1);

(function() {
    g = (function(t, foreign) {
        "use asm";
        var ff = foreign.ff;
        function f() {
            ff()
        }
        return f
    })(this, {
        ff: arguments.callee
    })
})()
function m(f) {
    var i = 0;
    while (true) {
        f();
        if ((i++ % 1000) === 0)
            gc();
    }
}
m(g);
