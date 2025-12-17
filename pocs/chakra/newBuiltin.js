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




function test0()
{
    print(eval.prototype == undefined);
}




function test1()
{
    new eval();
}

runtest("test0", test0, false);
runtest("test1", test1, true);

if (failed == 0)
{
    print("Passed");
}
