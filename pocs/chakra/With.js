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

    print(i);
    print(j);
    print(k);


    with (y)
    {
        print(i);
        if (j === undefined)
            print("undefined");
        print(k);
    }

    j = 0;
    k = "x.k";

    var foo = function f() {
                  var i  = 'local.i';
                  print(i);
                  print(foo.length);
              };
    x.foo = 'x.foo';
}


print(i);
print(A.prototype.i);
print(x.i);
print(y.i);
print(j);
if (A.prototype.j === undefined)
    print("undefined");
if (x.j === undefined)
    print("undefined");
if (y.j === undefined)
    print("undefined");
print(x.k);
print(y.k);
print(x.foo);
foo();
try
{
    f(); 
} catch (e) {
    print(e);
}

function foo2() {
        var a1 = new Object();
        a1.foo = 16;
        a1.bar = "abcd";
        with ( a1 ) {
                a1 = new Object();
                a1.foo = 16;
                a1.bar = "dcba";
                print(bar);
        }
}
foo2();

var evalinwith = 'global evalinwith';
(function (){
    var O = {evalinwith:'no'};
    with(O)
    {
        eval('var evalinwith = "O.evalinwith"');
        eval('print(evalinwith + "")');
    }
    evalinwith = 'local evalinwith';
    eval('print(evalinwith + "")');
})();
eval('print(evalinwith + "")');

function verify(act, msg) { print(msg + ': ' + act); } 
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
        print("a is called");
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
        function inner(){ print('in inner') }
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
        function inner() { print('in inner'); }
        function outer() {
            with({}) {
                inner();
            }
        }
    }
    outer();
})();