




var collatorExcludeList = [];
var numberFormatExcludeList = [];
var dateTimeFormatExcludeList = [];

function testHiddenInternals(constructor, objType, excludeList) {
    var obj = new constructor();

    var properties = Object.getOwnPropertyNames(obj);
    if (properties.length == 0) return;

    var extraProperties = false;

    properties.forEach(function (prop) {
        if (excludeList.indexOf(prop) !== -1) return;

        if (prop.indexOf("__", 0) === -1) {
            WScript.Echo("Detected additional property '" + prop + "' on '" + objType + "', if property is expected update this test's exclude lists.");
            extraProperties = true;
        }
    });
    if (extraProperties) {
        WScript.Echo("Failed for '" + objType + "'!");
    }
}

testHiddenInternals(Intl.Collator, "Collator", collatorExcludeList);
testHiddenInternals(Intl.NumberFormat, "NumberFormat", numberFormatExcludeList);
testHiddenInternals(Intl.DateTimeFormat, "DateTimeFormat", dateTimeFormatExcludeList);

if(Intl.hasOwnProperty("EngineInterface") === true){
    WScript.Echo("EngineInterface object is not hidden.");
}

WScript.Echo("Pass");
