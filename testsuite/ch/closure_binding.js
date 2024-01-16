




WScript.Echo("Scenario: Multiple closures, with variables that are modified in the parent function");

function write(x) { WScript.Echo(x + ""); }

function f()
{
        var y = "before modification";

        var ret1 = function()
        {
                WScript.Echo("1st function");
                WScript.Echo(y);
        }

        y = "after modification";

        var ret2 = function()
        {
                WScript.Echo("2nd function");
                WScript.Echo(y);
        }

        return [ret1,ret2];
}

(function() {
    function f() {
        write('In f');
    }
    function g() {
        write('In g');
    }

    var savef = f;
    f(f = g);
    f = savef;
    
    function foo() {
        write(typeof f);
        write(typeof g);
    }
})();

function g(funcs)
{
        funcs[1]();
        funcs[0]();
}

var clo = f();
g(clo);
g(clo);


(function(){
    var f = function() { a = 2; return 1; }
    var a = 1;
    WScript.Echo(a + (f() + a));
})();


(function(){
    var f = function() { a = 2; return 1; }
    var a = 1;
    WScript.Echo(a + (f() + a));
    eval("");
})();


(function(){
    var f = function() { a = 2; return 1; }
    var a = 1;
    eval('WScript.Echo(a + (f() + a));');
})();


(function(){
    var f = function() { return 1; }
    var a = 1;
    WScript.Echo(a + (f() + a));
})();
