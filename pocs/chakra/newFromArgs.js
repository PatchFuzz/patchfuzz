Array.prototype[1] = 100;
function f(param)
{
    var a = new Array(1, param, 3);
    return a;
}

var a1 = f(undefined)[1];
var a2 = f(undefined)[1];

print(testFunction, 50);



function testFunction()
{
    print(`${a1}`, true);
    print(`${a2}`, true);  

    emitTTDLog(ttdLogURI);
}
