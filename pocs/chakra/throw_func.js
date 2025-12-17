function test(param)
{
    throw function() { return param; }

}

function runtest(param)
{

    try
    {
        test(param)
    }
    catch (e)
    {
        print(e());
    }
}

runtest("test1");
runtest("test2");

