var a= [1, 2.2, 3.3]
Array.prototype[4] = 10;

function Test()
{
    a.reverse();
    print(a);
}

Test();

