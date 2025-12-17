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




var result = 0;



function bitsinbyte(b) {
var m = 1, c = 0;
while(m<0x100) {
if(b & m) c++;
m <<= 1;
}
return c;
}

function TimeFunc(func) {
var x, y, t;
var sum = 0;
for(var x=0; x<350; x++)
for(var y=0; y<256; y++) sum += func(y);
return sum;
}

result = TimeFunc(bitsinbyte);

var expected = 358400;
if (result != expected)
    throw "ERROR: bad result: expected " + expected + " but got " + result;



var _sunSpiderInterval = new Date() - _sunSpiderStartDate;

print("### TIME:", _sunSpiderInterval, "ms");