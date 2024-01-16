





function test()
{
    var i = 0;
    var simple_stackfunc = function() 
    {
        if (i == 0)
        {
            i++;
            return simple_stackfunc();
        }
        return i;
    }
    return simple_stackfunc();
}

WScript.Echo(test());
WScript.Echo(test());

