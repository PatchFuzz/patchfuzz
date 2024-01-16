



function fast3bitlookup(b) {
var c, bi3b = 0xE994; 
c  = 3 & (bi3b >> ((b << 1) & 14));
c += 3 & (bi3b >> ((b >> 2) & 14));
c += 3 & (bi3b >> ((b >> 5) & 6));
return c;


}

var ret = 0;
function TimeFunc(func) {
  var x, y, t;
  for(var x=0; x<500; x++)
  for(var y=0; y<256; y++) {
    ret += func(y);
  }
}

TimeFunc(fast3bitlookup);
assertEq(ret, 512000)
