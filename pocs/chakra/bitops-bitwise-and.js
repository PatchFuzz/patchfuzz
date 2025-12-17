if(typeof(WScript) === "undefined")
{
    var print= {
        Echo: print
    }
}

function record(time) {
    document.getElementById("console").innerHTML = time + "ms";
    if (window.parent) {
        parent.recordResult(time);
    }
}

var _sunSpiderStartDate = new Date();



bitwiseAndValue = 4294967296;
for (var i = 0; i < 600000; i++)
    bitwiseAndValue = bitwiseAndValue & i;

var result = bitwiseAndValue;

var expected = 0;
if (result != expected)
    throw "ERROR: bad result: expected " + expected + " but got " + result;



var _sunSpiderInterval = new Date() - _sunSpiderStartDate;

print("### TIME:", _sunSpiderInterval, "ms");