var g = false;
function test(i)
{

    var a = i + 1;
    var b = a;
    
    if (g)
    {
        return b;
    }
    return 1;
}


print(test(10));
g = true;
print(test(10));
