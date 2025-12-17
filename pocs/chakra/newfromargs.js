Array.prototype[1] = 100;
function f(param)
{
    var a = new Array(1, param, 3);
    return a;
}

print(f(undefined)[1]);
print(f(undefined)[1]);  
