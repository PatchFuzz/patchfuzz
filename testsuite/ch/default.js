










var glob = {}; 

glob; 
(function() {
    function f1(a = 1, b, c = 2) {
        var m = 3;
    }
    f1(); 
})();

glob; 
(function() {
    function f1(a = 1, b, c = 2) {
        var m = 3;
        function bar() {
            a;
            m;
        }
    }
    f1(); 
})();

glob; 
(function() {
    function f1(a = 1, b, c = 2) {
        var m = 3;
        eval('');
    }
    f1(); 
})();

glob; 
(function() {
    function f1({a} = {a:1}, b, [c] = [2]) {
        var m = 3;
    }
    f1(); 
})();

glob; 
(function() {
    function f1(a = 1, b = function () { return 2; }, c = 3) {
        var m = 3;
    }
    f1(); 
})();

glob; 
(function() {
    function f1(a = 1, b = function () { return 2; }, c = 3) {
        function bar() {
            a;b;c;
        }
    }
    f1(); 
})();

glob; 
(function() {
    function f1(a = 1, b = function () { return 2; }, c = 3) {
        function bar() {
            a;b;c;
        }
        eval('');
    }
    f1(); 
})();

glob; 
(function() {
    function f1(a = 1, b = function () { 
        return 2;   
    }, c = b()) {
        var m = 3;
    }
    f1();
})();

glob; 
(function() {
    function f1(a = 1, b = function () { return a; }, c = 3) {
        var m = 3;
    }
    f1(); 
})();

glob; 
(function() {
    function f1(a = 1, b = function () { 
        return a;   
    }, c = b()) {
        var m = 3;
        m; 
    }
    f1();
})();

glob; 
(function() {
    function f1(a = 1, b = function () { 
        return a;   
    }) {
        var m = 3;
        var c = b();
    }
    f1();
})();

glob; 
(function() {
    function f1(a = 1, b = function () { 
        return a;   
    }) {
        var m = 3;
        var c = b();
    }
    f1();
})();

glob; 
(function() {
    function f1(a = 1, b = function () { 
        return a + c();   
    }, c = () => {
        return b.length + a; 
    }) {
        var m = 3; 
        var n = c();
        var o = b();
        o; 
    }
    f1();
})();

glob; 
(function() {
    function f1(a = 1, b = function () { 
        return a + c();   
    }, c = () => {
        return eval("b.length + a"); 
    }) {
        var m = 3; 
        var n = c();
        var o = eval("b()");
        o; 
    }
    f1();
})();

glob; 
(function() {
    function f1(a = 1, b = function () { 
        return a + c();
    }, c = () => {
        return eval("b.length + a"); 
    }) {
        var m = eval("b()");
    }
    f1(10);
})();

glob; 
(function() {
    function f1(a = 1, b = function () { return a; }, c) {
        var m = 3;
        (function () {
            a;
            m;
        })();
    }
    f1(); 
})();

glob; 
(function() {
    function f1(a = 1, b = function () { return a; }, c) {
        var m = 3;
        (function () {
        })();
        eval('');
    }
    f1(); 
})();

glob; 
(function() {
    function f1(a = 1, b = function () { return a; }, c) {
        var m = 3;
        (function () {
            eval('');
        })();
    }
    f1(); 
})();

glob; 
(function() {
    function f1(a = 1, b = function () { 
        return eval("a");   
    }, c = b()) {
        var m = b();
        m; 
    }
    f1();
})();

glob; 
(function() {
    function f1(a = 10,
                    b = arguments ) {
        var c = b; 
    }
    f1(1);
})();

glob; 
(function() {
    function f1(a = 10, b = arguments,
                                    c = () => a ) {
        var d = b; 
    }
    f1(1);
})();

glob; 
(function() {
    function f1(a = 10,
                    b = 11) {
        var c = arguments; 
    }
    f1(1);
})();

glob; 
(function() {
    function f1(a = 10,
                    b = () => a) {
        var c = arguments; 
    }
    f1(1);
})();

glob; 
(function() {
    function f1(a = 10, b = 11,
                            c = arguments ) {
        function arguments() {
            return c;
        }
        var d = c;
        d; 
    }
    f1(1);
})();

glob; 
(function() {
    function f1( a = 10,
                    b = arguments ) {
        function arguments() {
            return 100;
        }
        var c = b;
        c; 
    }
    f1(1);
})();

glob; 
(function() {
    function f1( a = 10, b = arguments,
                                c = ()=> a ) {
        function arguments() {
            return 100;
        }
        var d = b;
        b; 
    }
    f1(1);
})();

glob; 
(function() {
    function f1(a = 10, b = () => a,
                            c = 11 ) {
        var d = a; 
        var c = () => b;
        a;  
    }
    f1(1);
})();

glob; 
(function() {
    function f1(a = 10, b = () => a,
                            c = 11 ) {
        var d = a; 
        function c() {
            return b;
        };
        a;  
    }
    f1(1);
})();

glob; 
(function() {
    function f1(a = 10, b = () => a, c = 11 ) {
        function c() {
            return 100;
        }
        var d = a;
        a; 
    }
    f1(1);
})();

print("Pass");
