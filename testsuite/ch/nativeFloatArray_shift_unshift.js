




var a= [1, 2.2, 3.3]
Array.prototype[4] = 10;

function Test()
{
    WScript.Echo(a.shift());
    WScript.Echo(a.unshift(100,101,103));
}

Test();

