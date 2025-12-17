print("Basic string concatenation, II.");

function f(x,y)
{
    return x + "." + y;
}

var str = "-";
for(var i = 0; i < 10; ++i)
{
    str = f(i,f(str, i));
}

print(str);
