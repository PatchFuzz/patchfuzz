function blah()
{

    function nested2()
    {
        return nested2;
    }
    function nested(a)
    {
        if (a) {
            throw 1;
        }
    }
    nested(nested2());
}


try
{
    blah();
}
catch (e)
{
}
