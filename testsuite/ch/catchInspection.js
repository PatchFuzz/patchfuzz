






var top = {}
function bar() {
    try {
        abc.def = 10;
    } catch (e) {

        var f1 = function (arg1) {
            e;
            var m = arguments[0];
            var f2 = function () {

                var in1 = 0;
                m;
                var f3 = function () {
                    var in2 = 1;
                    in1;       
                }
                f3();
            }
            f2();
        };

        top.f1 = f1;
        top.f1(111);
    }
}

bar();

top.f1();

var startTest = function () {
    try {
        abc.def = 10;
    } catch (e) {
        var j1 = function () {
            e;
        };
        j1();                     
    }
}

startTest();

function bar2() {
    try {
        abc.def = 10;
    } catch (e) {
        var j1 = function () {
            e; 
            
        };
        j1();
    }
}

bar2();

function foo() {
    var k = 10;
    function g() {
        k;
        try {
            abc.def = 10;
        }
        catch (ex) {
            ex;                    
        }
    }
    g();
}

foo();

function foo1() {
    var k = 10;
    function g() {
        var in1 = 10;
        k;
        try {
            abc.def = 10;
        }
        catch (ex) {
            ex;                    
        }
    }
    g();
}

foo1();
foo1([22]);

function foo10() {
    try {
        abc.def = 10;
    }
    catch (ex) {
        ex;                    
    }
}

foo10();

function foo11() {
    function g() {
        try {
            abc.def = 10;
        }
        catch (ex) {
            ex;                    
        }
    }
    g();
}

foo11();

function foo2() {
    var m = 10;
    function g() {
        try {
            abc.def = 10;
        }
        catch (ex) {
            ex;                    
        }
    }
    g();
}

foo2();

function foo3() {
    var m = 10;
    function g() {
        var m1 = 10;
        try {
            abc.def = 10;
        }
        catch (ex) {
            ex;                    
        }
    }
    g();
}

foo3();

try {
    abc.def = 10;
}
catch (ex) {
    ex;                    
}

function foo5() {
    var j = { x: 20, y: [30, 40] }
    j;                               
}

foo5();

function foo6() {
    try {
        abc.def = 10;
    }
    catch (ex) {
        ex;                    
    }
}

foo6();

function foo7() {
    try {
        abc.def = 10;
    }
    catch (ex) {
        ex;
        try {
            dd.bb = "";
        }
        catch (ex1) {
            ex1;                
        }
    }
}

foo7();


(function f() { 
    var fa = 123;
    try {
        throw -1;
    }
    catch (e1) { 
        e1;
        (function g() {
            var ga = 40;
            fa; ga;
            e1;
            
        })();
    }
})();

(function f() { 
    try {
        throw -1;
    }
    catch (e1) { 
        e1;
        (function g() {
            e1;
            
        })();
    }
})();

(function foo() { 
    var foo0 = 12;
    function f() { 
        try {
            throw new Error("1 Error");
        }
        catch (e1) { 
            e1; foo0;
            (function g() {
                e1;
                
            })();
        }
    }
    f();
})();

(function foo() {
    var a = 1;
    try {
        throw -1;
    }
    catch { 
        let b = 2;
        (function g() {
            var c = 3;
            a; b; c; 
        })();
    }
})();

WScript.Echo("Pass");
