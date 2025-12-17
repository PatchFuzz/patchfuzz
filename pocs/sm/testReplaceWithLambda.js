(function(b) {
    print("abc".replace(/a|b/g, function(a) { return b[a] }), 'ABc');
})({a:'A', b:'B' });
(function() {
    var b = {a:'A', b:'B' };
    print("abc".replace(/a|b/g, function(a) { return b[a] }), 'ABc');
})();
(function() {
    {
        let b = {a:'A', b:'B' };
        print("abc".replace(/a|b/g, function(a) { return b[a] }), 'ABc');
    }
})();
(function() {
    var b = {a:'A', b:'B' };
    (function () {
        print("abc".replace(/a|b/g, function(a) { return b[a] }), 'ABc');
    })();
})();
(function() {
    {
        let b = {a:'A', b:'B' };
        (function () {
            print("abc".replace(/a|b/g, function(a) { return b[a] }), 'ABc');
        })();
    }
})();
(function() {
    var b = {a:'A', b:'B' };
    (function () {
        (function () {
            print("abc".replace(/a|b/g, function(a) { return b[a] }), 'ABc');
        })();
    })();
})();


(function() {
    var b = {a:'A', b:'B' };
    with ({}) {
        (function () {
            print("abc".replace(/a|b/g, function(a) { return b[a] }), 'ABc');
        })();
    }
})();
(function() {
   var b = {a:'A', b:'B' };
   var bad = function() { b = {a:1, b:2}; return 'X' }
   Object.defineProperty(b, 'x', {get:bad});
   print("xabc".replace(/x|a|b/g, function(a) { return b[a] }), 'X12c');
})();
