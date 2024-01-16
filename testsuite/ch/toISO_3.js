




runTest(new Date(-3260000000000000));
runTest(new Date(-860000000000000));
runTest(new Date(-62167219200001));
runTest(new Date(3260000000000000));
runTest(new Date(860000000000000));
runTest(new Date(-61167219200001));
runTest(new Date(-62140000000000));

function runTest(d)
{
    writeLine(d.toISOString());
    writeLine(d.toJSON());
}




function writeLine(str)
{
    WScript.Echo("" + str);
}

function safeCall(func)
{
    try
    {
        return func();
    }
    catch (ex)
    {
        writeLine(ex.name + ": " + ex.message);
    }
}
