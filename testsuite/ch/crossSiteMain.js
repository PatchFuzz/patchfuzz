





var e = WScript.LoadScriptFile("crossSiteChild.js", "samethread");

var child_obj = e.obj;

child_obj.x = function foo1() {
    return "pass";
}

child_obj.y = function foo2(data) {
    telemetryLog(`${data}`, true);
}

WScript.SetTimeout(testFunction, 50);



function testFunction()
{
    telemetryLog(`${child_obj.xval}`, true);
    telemetryLog(`${child_obj.otherObj.say} ${child_obj.otherStr}`, true);

    child_obj.xval = "passv"

    telemetryLog(`${child_obj.xval}`, true);

    emitTTDLog(ttdLogURI);
}
