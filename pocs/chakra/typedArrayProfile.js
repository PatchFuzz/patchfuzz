var Arr = new Float64Array(100);
var Arr2 = new Array(100);
var Obj = new Object();

var Failed = 0;

function FAILED()
{
    Failed++;
    print("FAILED");
}

Obj.prop1 = 1;
Obj.prop2 = 1;
Obj.prop3 = 1;
Obj.prop4 = 1;
Obj.prop5 = 1;
Obj.prop6 = 1;
Obj.prop7 = 1;
Obj.prop8 = 1;

var x = 0.1;
var one = 1;

function init(o)
{
    for (var str in o)
    {
        o[str] = x * one;
    }
}

function verify(o)
{
    for (var str in o)
    {
        if (o[str] !== x)
        {
            FAILED();
        }
    }
}


init(Arr);

init(Obj);

init(Obj);


verify(Obj);

if (Failed === 0)
{
    print("Passed");
}
