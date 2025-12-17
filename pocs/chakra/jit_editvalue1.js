function bar (c)
{
    var m = 10;
    
    return m;       
}

function bar1(k)
{
    k++;
    k++;             
}
function bar2()
{
    var j = 10;  
}

function outer(arg1)
{
    var k = new Object();
    var k1 = [1,2];
    
    function f1(arg2)
    {
        var m = 10;
        var m2 = 55;
        bar(10);
        m;
        bar1(22);
        return m;
    }
    f1(123 + arg1);
    bar2();
}

outer(21);

print("Pass");
