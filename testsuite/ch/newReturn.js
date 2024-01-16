




var failed = 0;
function runtest(name, func, throwException)
{
    try
    {
        func();
        if (throwException)
        {
            WScript.Echo(name + ": Test failed, unexpected no exception thrown");
            failed++;
        }
        else
        {
            WScript.Echo(name + ": Test passed, expected no exception thrown");
        }
    }
    catch (e)
    {
        if (!throwException || (e.name != "TypeError" && e.name != "ReferenceError"))
        {
            WScript.Echo(name + ": test failed, unexpected " + e.name + "-" + e.message);
            failed++;
        }
        else
        {
            WScript.Echo(name + ": Test passed, expected " + e.name + "-" + e.message);
        }
    }
}

function assert(cond)
{
    if (!cond)
    {
        throw new Error("AssertFailed");
    }
}




function ReturnObject()
{
    this.hello = "yay2";
    var o = new Object();
    o.obj = this;
    return o;
}
function test1()
{
    var o = new ReturnObject();
    assert(o.constructor == Object.prototype.constructor);
    assert(o.hello == undefined);
    assert(o.obj.constructor == ReturnObject);
    assert(o.obj.hello == "yay2");
}



function ReturnInt()
{
    this.hello = "yay3";
    return 3;
}
function test2()
{
    var o = new ReturnInt();
    assert(o.constructor == ReturnInt);
    assert(o.hello == "yay3");
}




function ReturnFloat()
{
    this.hello = "yay4";
    return 3.3;
}
function test3()
{
    var o = new ReturnFloat();
    assert(o.constructor == ReturnFloat);
    assert(o.hello == "yay4");
}



function ReturnString()
{
    this.hello = "yay5";
    return "blah" + this.hello;
}
function test4()
{
    var o = new ReturnString();
    assert(o.constructor == ReturnString);
    assert(o.hello == "yay5");
}




function ReturnBool()
{
    this.hello = "yay6";
    return this.hello == "yay6";
}
function test5()
{
    var o = new ReturnBool();
    assert(o.constructor == ReturnBool);
    assert(o.hello == "yay6");
}

runtest("test1", test1, false);
runtest("test2", test2, false);
runtest("test3", test3, false);
runtest("test4", test4, false);
runtest("test5", test5, false);

if (failed == 0)
{
    WScript.Echo("Passed");
}
