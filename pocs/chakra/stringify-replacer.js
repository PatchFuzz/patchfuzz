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

print(JSON.stringify(a,o));


print(JSON.stringify(true, [new Number(1.5), true])); 
print(JSON.stringify(false, [new Number(1.5), true]));
print(JSON.stringify(null, [new Number(1.5), true]));

print(JSON.stringify(a, [false, "a0", true, "a10", false]));
