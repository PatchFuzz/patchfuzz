




function A(k) 
{
    this.k = k;
}

var x = new A(1);
var y = new A(undefined);

var i = 1;
var j = 2;

with (x)
{
    i = 2;

    with (A.prototype)
    {
        i = 3;
        x.i = 77;
        i = 4;
    }

    with (y)
    {
        i = 4.0;
        j = "y.j";
        y.j = undefined;
        k = null;
    }

    A.prototype.i = undefined;

    with (A.prototype)
    {
        i = 99;
    }

    WScript.Echo(i);
    WScript.Echo(j);
    WScript.Echo(k);


    with (y)
    {
        WScript.Echo(i);
        if (j === undefined)
            WScript.Echo("undefined");
        WScript.Echo(k);
    }

    j = 0;
    k = "x.k";

    var foo = function f() {
                  var i  = 'local.i';
                  WScript.Echo(i);
                  WScript.Echo(foo.length);
              };
    x.foo = 'x.foo';
}


WScript.Echo(i);
WScript.Echo(A.prototype.i);
WScript.Echo(x.i);
WScript.Echo(y.i);
WScript.Echo(j);
if (A.prototype.j === undefined)
    WScript.Echo("undefined");
if (x.j === undefined)
    WScript.Echo("undefined");
if (y.j === undefined)
    WScript.Echo("undefined");
WScript.Echo(x.k);
WScript.Echo(y.k);
WScript.Echo(x.foo);
foo();
try
{
    f(); 
} catch (e) {
    WScript.Echo(e);
}

function foo2() {
        var a1 = new Object();
        a1.foo = 16;
        a1.bar = "abcd";
        with ( a1 ) {
                a1 = new Object();
                a1.foo = 16;
                a1.bar = "dcba";
                WScript.Echo(bar);
        }
}
foo2();

var evalinwith = 'global evalinwith';
(function (){
    var O = {evalinwith:'no'};
    with(O)
    {
        eval('var evalinwith = "O.evalinwith"');
        eval('WScript.Echo(evalinwith + "")');
    }
    evalinwith = 'local evalinwith';
    eval('WScript.Echo(evalinwith + "")');
})();
eval('WScript.Echo(evalinwith + "")');

function verify(act, msg) { WScript.Echo(msg + ': ' + act); } 
var level1Func = function level1FuncIdent() {
    var level1 = "level1";

    with({level1: ""}) {
        try {
            throw "throw";
        } catch(level1) {}

    }
    
    verify(level1, "Value of level1 after assignment at level 1");
}
level1Func();

(function () {
    function a()
    {
        WScript.Echo("a is called");
    }

    (function(){
        try { 
            throw a;
        } 
        catch(x) { 
            with({}){
                x();
            }
        } 
    })();
})();



with ({}) {
    var arrwithfunc = [(function handlerFactory() { return; })];
}

(function() {
    function outer() {
        function inner(){ WScript.Echo('in inner') }
        with({}) 
        {
            {
                (function(){ inner(); })();
            }
        }
    }
    outer();
})();

(function() {
    {
        function inner() { WScript.Echo('in inner'); }
        function outer() {
            with({}) {
                inner();
            }
        }
    }
    outer();
})();