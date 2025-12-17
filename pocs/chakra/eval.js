var evalCode1;
eval("evalCode1 = function() { return evalCode1 + ' ' + captured; }");

var evalCode2 = undefined;
var evalCode3 = undefined;

var captured = "ok";

function setCode2()
{
    var notCaptured = 5;
    var captured = "bob in setCode2";
    eval("evalCode2 = function() { return evalCode2 + ' ' + captured; }");
    
    eval.call(this, "evalCode3 = function() { return evalCode3 + ' ' + captured; }")
}

setCode2();
print(testFunction, 50);

function testFunction()
{
    print(`evalCode1: ${evalCode1()}`, true); 
    print(`evalCode2: ${evalCode2()}`, true); 
    
    print(`evalCode3: ${evalCode3()}`, true); 

    emitTTDLog(ttdLogURI);
}

