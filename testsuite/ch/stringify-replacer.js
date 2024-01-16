





var o = new Array();
var a = new Object();


function propString(i)
{
    return function() { var ret = "a" + i; return ret; };
}

function init(o, a)
{
    for (var i = 0; i < 21; i++)
    {
        
        
        Object.defineProperty(o, i, { get: propString(i) } );


        
        a["a" + i] = i;
    }
}

init(o,a);

WScript.Echo(JSON.stringify(a,o));


WScript.Echo(JSON.stringify(true, [new Number(1.5), true])); 
WScript.Echo(JSON.stringify(false, [new Number(1.5), true]));
WScript.Echo(JSON.stringify(null, [new Number(1.5), true]));

WScript.Echo(JSON.stringify(a, [false, "a0", true, "a10", false]));
