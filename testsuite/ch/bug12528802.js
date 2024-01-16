




var obj = { foo : function() {} };

function bar(arg)
{
    obj.foo.apply(obj, arguments);
    let local;
    let baz = function() { local; };
}

function test()
{
    bar();
}

test();
test();
test();

WScript.Echo("PASSED");
