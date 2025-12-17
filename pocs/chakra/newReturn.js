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
    print(o.constructor == Object.prototype.constructor);
    print(o.hello == undefined);
    print(o.obj.constructor == ReturnObject);
    print(o.obj.hello == "yay2");
}



function ReturnInt()
{
    this.hello = "yay3";
    return 3;
}
function test2()
{
    var o = new ReturnInt();
    print(o.constructor == ReturnInt);
    print(o.hello == "yay3");
}




function ReturnFloat()
{
    this.hello = "yay4";
    return 3.3;
}
function test3()
{
    var o = new ReturnFloat();
    print(o.constructor == ReturnFloat);
    print(o.hello == "yay4");
}



function ReturnString()
{
    this.hello = "yay5";
    return "blah" + this.hello;
}
function test4()
{
    var o = new ReturnString();
    print(o.constructor == ReturnString);
    print(o.hello == "yay5");
}




function ReturnBool()
{
    this.hello = "yay6";
    return this.hello == "yay6";
}
function test5()
{
    var o = new ReturnBool();
    print(o.constructor == ReturnBool);
    print(o.hello == "yay6");
}

runtest("test1", test1, false);
runtest("test2", test2, false);
runtest("test3", test3, false);
runtest("test4", test4, false);
runtest("test5", test5, false);

if (failed == 0)
{
    print("Passed");
}
