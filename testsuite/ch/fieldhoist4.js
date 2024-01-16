




function fieldhoist1()
{
    var object = {};

    var sum = 0;
    for (var i = 0; i < 3; i++)
    {
        sum += object.sum;      
        Object.defineProperty(object, "sum", { get: function() { WScript.Echo("sum" ); }, configurable: true });
        sum += object.sum;      
    }
}

function fieldhoist2()
{
    var object = {};

    var sum = 0;
    for (var i = 0; i < 3; i++)
    {
        sum += object.sum;      
        Object.defineProperty(object, "x", { get: function() { WScript.Echo("x"); }, configurable: true });  
        sum += object.sum;      
    }
}

function fieldhoist3(name)
{
    var object = { sum: 1};

    Object.defineProperty(object, name, { set: function(val) { WScript.Echo(val); }, configurable: true });
    var sum = 0;
    for (var i = 0; i < 3; i++)
    {
        sum += object.sum;      
        object[name] = object.sum;       
        sum += object.sum;      
    }
}

function main()
{
    fieldhoist1();
    fieldhoist2();
    fieldhoist3("x");
}

main();
