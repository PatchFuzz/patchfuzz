function verify(x,y)
{
    if(x != y)
        print("ERROR: " + x + " != " + y);
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
        print("caught " + a);
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
            print("inner finally, i = " + i);
        }
    }
    catch(a)
    {
        print("caught " + a);
        verify(a, objs[i]);
    }
    finally
    {
        print("outer finally, i = " + i);
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
                print("finally #3, i = " + i);
            }
        }
        catch(a)
        {
            print("caught " + a);
            verify(a, objs[i]);
        }
        finally
        {
            print("finally #2, i = " + i);
            throw "another throw";
        }
    }
    catch(a)
    {
        print("caught " + a);
        verify(a, "another throw");
    }
}
