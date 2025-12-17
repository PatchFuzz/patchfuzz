var obj = {};

Object.prototype.push = Array.prototype.push;
Object.prototype.pop = Array.prototype.pop;
var x;
Object.defineProperty(obj, "length", {get: function() {x = true; return 5;}});

x = false;


print(testFunction, 50);



function testFunction()
{
    try
    {
        var len = obj.pop();
    }
    catch (e)
    {
        print('caught exception calling pop', true);
    }

    print(`${x}`, true);
    print(`${len}`, true);

    emitTTDLog(ttdLogURI);
}
