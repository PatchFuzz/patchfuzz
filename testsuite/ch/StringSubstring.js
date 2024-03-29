




function test(x, s, e)
{
    var result = x.substring(s, e);
    WScript.Echo('"' + result + '", length:', result.length);
}





var left = "abcdefghijklmnopqrstuvwxyz";
test(left, 1, 10);
test(left, 0, 5);
test(left, 15, 25);





var right = "1234567890";
var c = left + right;

WScript.Echo("Left-only");
test(c, 1, 10);
test(c, 0, 5);
test(c, 15, 25);
WScript.Echo();

WScript.Echo("Right-only");
var o = left.length;
test(c, o + 1, o + 5);
test(c, o, o + 10);
WScript.Echo();

WScript.Echo("Split");
test(c, o - 2, o + 3);
test(c, 0, c.length);
WScript.Echo();





WScript.Echo("Split");
test(left, 3);  
test(left, 0, 0);
test(left, 0, 1);
