




function foo(x, x)
{
   return x == 2;
}

if (foo(1,2))
    WScript.Echo("Passed\n");
else
    WScript.Echo("FAILED\n");
