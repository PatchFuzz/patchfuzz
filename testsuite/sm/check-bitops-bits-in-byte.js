




function bitsinbyte(b) {
var m = 1, c = 0;
while(m<0x100) {
if(b & m) c++;
m <<= 1;
}
return c;
}

var ret = 0;
function TimeFunc(func) {
var x, y, t;
for(var x=0; x<350; x++)
for(var y=0; y<256; y++) 
  ret += func(y);
}

TimeFunc(bitsinbyte);
assertEq(ret, 358400)
