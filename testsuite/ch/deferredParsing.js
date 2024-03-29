




(function ()
{
    function foo() { writeLine("easy, cancel defer"); }
    foo();
})();

(function ()
{
    function foo() { writeLine("easy"); }
    foo();
}).call();

(function ()
{
    var goo = function (str) { writeLine(str); };
    function foo() { goo("medium"); }
    (function () { foo(); }).call();
}).call();

(function ()
{
    writeLine((function ()
    {
        var goo = function () { return "hard"; };
        function foo() { return goo(); }
        return { callFoo: function () { return foo(); } };
    }).call().callFoo());
}).apply(this);

var x = { data: "OK" };
with (x)
{
  (function outer()
  {
    writeLine("outer function: " + data);
    (function inner()
    {
      writeLine("inner function: " + data);
    })();
  })();
}

var err = 'global';
try {
    var f1 = function() { writeLine(err) };
    throw 'catch';
}
catch(err) {
    var f2 = function() { writeLine(err) };
    try {
        throw 'catch2';
    }
    catch(err) {
        var f3 = function() { writeLine(err) };
    }
}
f1();
f2();
f3();

var str = '' +
    'x = { get func() { return 1; } };' +
    'x = { get "func"() { return 1; } };' +
    'x = { get 57() { return 1;} };' +
    'x = { get 1e5() { return 1;} };' +
    'x = { get func() { return 1;} };';

(function() {
    
    
    var str = '';
    (0,eval)('eval(str)');
})();

(function (param) {
    return function() {
        writeLine(param);
    };
})('hi there')();

(function()
{
    
    new function x(x)
    {
        function __tmp__()
        {
        }
        eval("\r\n    writeLine(x)")
    }
})();

var newfunction = new Function('writeLine("puppies!");');
newfunction();


function dupes(a,b,c,a) {return a}
WScript.Echo(dupes(0));



function writeLine(str)
{
    WScript.Echo("" + str);
}
