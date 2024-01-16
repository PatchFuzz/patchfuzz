




this.x = 9;
var module = {
    x: 81,
    getX: function (y) { return this.x + y; }
};

var getX = module.getX;
var boundGetX = getX.bind(module, 3);

WScript.SetTimeout(testFunction, 50);



function testFunction()
{
    telemetryLog(`getX(1): ${getX(1)}`, true); 
    telemetryLog(`module.getX(1): ${module.getX(1)}`, true); 
    telemetryLog(`boundGetX(): ${boundGetX()}`, true); 

    emitTTDLog(ttdLogURI);
}