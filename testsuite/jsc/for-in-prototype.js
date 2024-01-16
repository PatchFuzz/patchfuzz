(function() {
    
    var foo = function() {
        var A = function() { };
        A.prototype.x = 42;
        var o = new A();
        o.x = 43;
        var result = "";
        for (var p in o)
            result += o[p];
        return result;
    };
    for (var i = 0; i < 10000; ++i) {
        if (foo() !== "43")
            throw new Error("bad result");
    }
    foo(null);
})();
(function() {
    
    var foo = function() {
        var A = function() {};
        A.prototype[0] = 42;
        var a = new A();
        a[0] = 43;
        var result = "";
        for (var p in a)
            result += a[p];
        return result;
    };
    noInline(foo);
    for (var i = 0; i < 10000; ++i) {
        if (foo() !== "43")
            throw new Error("bad result");
    }
    foo(null);
})();
(function() {
    
    var foo = function() {
        var A = function() {};
        A.prototype[0] = 42;
        A.prototype[1] = 3;
        var a = new A();
        a[0] = 43;
        var result = "";
        for (var p in a)
            result += a[p];
        return result;
    };
    noInline(foo);
    for (var i = 0; i < 10000; ++i) {
        if (foo() !== "433")
            throw new Error("bad result");
    }
    foo(null);
})();
