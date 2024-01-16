





Array.prototype[1] = 100;
function f(param)
{
    var a = new Array(1, param, 3);
    return a;
}

WScript.Echo(f(undefined)[1]);
WScript.Echo(f(undefined)[1]);  
