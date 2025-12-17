var a= [3.3, 2.2, 1]
Array.prototype[4] = 10;

function Test()
{
    a.sort(function(){return -1});
    print(a);
}

Test();
