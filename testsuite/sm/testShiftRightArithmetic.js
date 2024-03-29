


var s = 4;
var t = 100;
assertEq(42 >> s, 2);
assertEq(s >> 1, 2);
assertEq(23 >> 3, 2);
assertEq(t >> s, 6);


function testShiftRightArithmetic()
{
    var r = [];
    var i = 0;
    var j = 0;

    var shifts = [0,1,7,8,15,16,23,24,31];

    
    for (i = 0; i < shifts.length; i++)
        r[j++] = -2147483648 >> shifts[i];

    
    for (i = 0; i < shifts.length; i++)
        r[j++] = -2147483648 >> (shifts[i] + 32);

    
    for (i = 0; i < shifts.length; i++)
        r[j++] = -2147483648 >> (shifts[i] + 224);
    for (i = 0; i < shifts.length; i++)
        r[j++] = -2147483648 >> (shifts[i] + 256);

    return r.join(",");
}
assertEq(testShiftRightArithmetic(), 
	 "-2147483648,-1073741824,-16777216,-8388608,-65536,-32768,-256,-128,-1,"+
	 "-2147483648,-1073741824,-16777216,-8388608,-65536,-32768,-256,-128,-1,"+
	 "-2147483648,-1073741824,-16777216,-8388608,-65536,-32768,-256,-128,-1,"+
	 "-2147483648,-1073741824,-16777216,-8388608,-65536,-32768,-256,-128,-1");
