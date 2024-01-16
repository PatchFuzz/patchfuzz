




function Dump(output)
{
    if (this.WScript)
    {
        WScript.Echo(output);
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
    
    WScript.Echo("foo");
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

if (this.WScript && this.WScript.Arguments && this.WScript.LoadScriptFile("../UnitTestFramework/TrimStackTracePath.js"))
{
    if (this.WScript.Arguments[0] == "runTest")
    {
        runtest();
    }
}
