var failed = 0;
function runtest(name, func, throwException)
{
    try
    {
        func();
        if (throwException)
        {
            print(name + ": Test failed, unexpected no exception thrown");
            failed++;
        }
        else
        {
            print(name + ": Test passed, expected no exception thrown");
        }
    }
    catch (e)
    {
        if (!throwException || (e.name != "TypeError" && e.name != "ReferenceError"))
        {
            print(name + ": test failed, unexpected " + e.name + "-" + e.message);
            failed++;
        }
        else
        {
            print(name + ": Test passed, expected " + e.name + "-" + e.message);
        }
    }
}

function print(cond)
{
    if (!cond)
    {
        throw new Error("AssertFailed");
    }
}





function test1()
{
    var i = 1;
    new i;
}





function test2()
{
    new null();
}




function test3()
{
    new 1();
}



function test4()
{
    var o = new Object();
}



function test5()
{
    var o = new Object();
    new o;
}



function test6()
{
    new Blah();
}



function test7()
{
    var o = new Object();
    new o;
}



function ClassProto()
{
    this.hello = "yay"
}

ClassProto.prototype.func = function()
{
    return 3;
}

function test8()
{
    var o = new ClassProto();
    print(o.constructor == ClassProto);
    print(o.hello == "yay");
    print(o.func() == 3);
}



function PlainFunction()
{
    this.hello = "yay2";
}
function test9()
{
    var o = new PlainFunction();
    print(o.constructor == PlainFunction);
    print(o.hello == "yay2");
}

runtest("test1", test1, true);
runtest("test2", test2, true);
runtest("test3", test3, true);
runtest("test4", test4, false);
runtest("test5", test5, true);
runtest("test6", test6, true);
runtest("test7", test7, true);
runtest("test8", test8, false);
runtest("test9", test9, false);
if (failed == 0)
{
    print("Passed");
}
