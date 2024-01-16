




var a =0;
function func()
{
    
    return 3;
}



for (var i = 0; i < 10; i++)
{
    a += func();
}

WScript.Echo(a);
