










eval("\"use strict\"; var w;");
foo = function() { throw 0; }
var x;

(function() {
    eval("test = function() { ~foo(~(0 ? ~x : x) ? 0 : 0); return Function(); }");
})();




for (var i = 0; i < 2000; ++i) {
    try {
        test();
    } catch(e) {
    }
}

foo = function() { };
test();
