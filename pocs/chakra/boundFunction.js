this.x = 9;
var module = {
    x: 81,
    getX: function (y) { return this.x + y; }
};

var getX = module.getX;
var boundGetX = getX.bind(module, 3);

print(testFunction, 50);



function testFunction()
{
    print(`getX(1): ${getX(1)}`, true); 
    print(`module.getX(1): ${module.getX(1)}`, true); 
    print(`boundGetX(): ${boundGetX()}`, true); 

    emitTTDLog(ttdLogURI);
}