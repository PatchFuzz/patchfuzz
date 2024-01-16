




var x = foo(1, 2, 3);
var y = fooDeleted(1, 2, 3);

function foo(a, b, c)
{
    var res = {};
    var args = arguments;
    
    res.length = function() { return args.length; };
    res.named = function() { return b; };
    res.position = function() { return args[1]; };
   
    return res;
}

function fooDeleted(a, b, c)
{
    delete arguments[1];

    var res = {};
    var args = arguments;
    
    res.length = function() { return args.length; };
    res.named = function() { return b; }; 
    res.position = function() { return args[1]; };
   
    return res;
}

WScript.SetTimeout(testFunction, 20);

function testFunction()
{
    telemetryLog(`xlength: ${x.length()}`, true); 
    telemetryLog(`xnamed: ${x.named()}`, true); 
    telemetryLog(`xposition: ${x.position()}`, true); 
    
    telemetryLog(`ylength: ${y.length()}`, true); 
    telemetryLog(`ynamed: ${y.named()}`, true); 
    telemetryLog(`yposition: ${y.position()}`, true); 

    emitTTDLog(ttdLogURI);
}


