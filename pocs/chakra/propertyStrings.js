var a = new Array();
function f()
{
    var i = new Object();
    i
    Object.defineProperty(i, "Pass", {value: 1, writable:false, enumerable: true} );
    for (var attr in i)
    {
        a.push(attr);
    }

    for (var attr in Array)
    {}
}

f();

CollectGarbage();

for (var index = 0; index < a.length; index++)
{
    print(a[index]);
}
