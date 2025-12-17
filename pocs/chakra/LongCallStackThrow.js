function Dump(output)
{
    if (print)
    {
        print(output);
    }
    else
    {
        alert(output);
    }
}

function throwExceptionWithCatch()
{
    try
    {
        throwException();
    }
    catch(e)
    {
        Dump(TrimStackTracePath(e.stack));
    }
}

var errorObject;
function throwException()
{
    errorObject = new Error("this is my error");
    throw errorObject;
}

function runtest(max, catchException)
{
    var helper = function(i)
    {
        return function(j)
        {
            if (j == 0)
            {
                return catchException == undefined ? throwExceptionWithCatch() : throwException();
            }
            that["function" + (j-1)](j-1);
        }
    }
    var that = new Object();
    var i = 0;
    for (i = 0; i < max; i++)
    {
        that["function" + i] = helper(i);
    }
    that["function" + (max-1)](max-1);
}

if (print && print.Arguments && print("../UnitTestFramework/TrimStackTracePath.js"))
{
    if (print.Arguments[0] == "runTest")
    {
        runtest(print.Arguments[1]);
    }
}
