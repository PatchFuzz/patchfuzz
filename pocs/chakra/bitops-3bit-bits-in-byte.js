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



function fast3bitlookup(b) {
var c, bi3b = 0xE994; 
c  = 3 & (bi3b >> ((b << 1) & 14));
c += 3 & (bi3b >> ((b >> 2) & 14));
c += 3 & (bi3b >> ((b >> 5) & 6));
return c;


}


function TimeFunc(func) {
var x, y, t;
var sum = 0;
for(var x=0; x<500; x++)
for(var y=0; y<256; y++) sum += func(y);
return sum;
}

sum = TimeFunc(fast3bitlookup);

var expected = 512000;
if (sum != expected)
    throw "ERROR: bad result: expected " + expected + " but got " + sum;


var _sunSpiderInterval = new Date() - _sunSpiderStartDate;

print("### TIME:", _sunSpiderInterval, "ms");