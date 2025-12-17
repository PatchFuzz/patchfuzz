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

function throwException()
{
    try
    {
        BadType.someProperty = 0;
    }
    catch(e)
    {
        Dump(TrimStackTracePath(e.stack));
        Dump("");
    }
}

function throwExceptionWithFinally()
{
    try
    {
        BadTypeWithFinally.someProperty = 0;
    }
    catch(e)
    {
        Dump(TrimStackTracePath(e.stack));
        Dump("");
    }
    finally {} 
}

function throwExceptionLineNumber()
{
    try
    {
        StricModeFunction();
    }
    catch(e)
    {
        Dump(TrimStackTracePath(e.stack));
    }
}

function StricModeFunction()
{
"use strict"
    this.nonExistentProperty = 1;
    
    if(1) {}
    
    print("foo");
}

function bar()
{
    throwException();
    throwExceptionWithFinally();
    throwExceptionLineNumber();
}

function foo()
{
    bar();
}

function runtest()
{
    foo();
}

if (print && print.Arguments && print("../UnitTestFramework/TrimStackTracePath.js"))
{
    if (print.Arguments[0] == "runTest")
    {
        runtest();
    }
}
