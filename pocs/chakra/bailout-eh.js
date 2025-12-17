var g = 1;
function test()
{
    
    throw g;
}

try
{
    test()
}
catch (e)
{
    print(e);
}
print(g);
