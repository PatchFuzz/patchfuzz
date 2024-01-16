






function verify(x,y)
{
    if(x != y)
        WScript.Echo("ERROR: " + x + " != " + y);
}

var objs = [5, undefined, 'c', "test", [1,2,3] ];

for(var i = 0; i < objs.length; ++i)
{
    
    try
    {
        throw objs[i];
    }
    catch(a)
    {
        WScript.Echo("caught " + a);
        verify(a, objs[i]);
    }

    
    try
    {
        try
        {
            throw objs[i];
        }
        finally
        {
            WScript.Echo("inner finally, i = " + i);
        }
    }
    catch(a)
    {
        WScript.Echo("caught " + a);
        verify(a, objs[i]);
    }
    finally
    {
        WScript.Echo("outer finally, i = " + i);
    }

    
    try
    {
        try
        {
            try
            {
                throw objs[i];
            }
            finally
            {
                WScript.Echo("finally #3, i = " + i);
            }
        }
        catch(a)
        {
            WScript.Echo("caught " + a);
            verify(a, objs[i]);
        }
        finally
        {
            WScript.Echo("finally #2, i = " + i);
            throw "another throw";
        }
    }
    catch(a)
    {
        WScript.Echo("caught " + a);
        verify(a, "another throw");
    }
}
