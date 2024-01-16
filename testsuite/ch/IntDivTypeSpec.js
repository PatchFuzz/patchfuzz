





function IsNegZero(x)
{
    return x===0 && (1/x)===-Infinity;
}

function print(x)
{
    WScript.Echo(IsNegZero(x)? "-0" : x);
}


function test1()
{
    print( g / 5);
}
    
var g = 5;

test1(); 
test1(); 
g = 1;
test1(); 
g = -0;
test1(); 



function test2()
{
    for (var i = 0; i < g / 5; i++)
    {
    }
    print(i);
}

g = 5;
test2(); 
test2(); 
g = 10;
test2();
g = 11;
test2(); 
g = -0;
test2(); 



function test3()
{
    var v = g / 4;
    print(v / d);
}

var d = -4;
g = 16;
test3(); 
test3(); 
g = 0;
test3(); 
g = 16;
d = 0;
test3();

g = 15; 
d = 3;
test3();

g = -12;
test3();


