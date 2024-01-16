






function f()
{
}

f();

try
{
    f();
    throw 1;
}
catch (e)
{
    f();
}
finally
{
    f();
}

f();


