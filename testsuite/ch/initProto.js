




function write(v) { WScript.Echo(v + ""); }

function doEval(str)
{
    try {
        write(str + " = " + eval(str));
    } catch (e) { 
        write(str + " = err: " + e);
    }
}

function check(type)
{
    doEval(type + ".prototype");
    doEval("typeof("+ type + ".prototype)");
    doEval(type + ".prototype.length");
    doEval("typeof("+ type + ".prototype.length)");
    doEval(type + ".prototype.toString()");
}

var types = [ 
    "Array",
    "Boolean",
    "Date",
    
    "Number",
    "RegExp",
    "String"
]

for (var i=0; i< types.length; i++)
{
    check(types[i]);
}
