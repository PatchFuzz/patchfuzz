var o = {}
function test()
{
    var i = 0;
    function simple_stackfunc() 
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

print(test());
print(test());

