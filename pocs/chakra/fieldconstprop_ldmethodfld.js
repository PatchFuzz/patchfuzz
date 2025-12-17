function Test1()
{
    var a = new Object();
    a.x = 1;
    return a.x(); 
}

try
{
    Test1();
}
catch (e)
{
    print("PASS");
}
