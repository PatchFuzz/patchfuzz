var glob = {}; 
function test() {
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
}
test();
print(test);
print(test);
print(test);
print("Pass");
