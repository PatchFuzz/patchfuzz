




function test(s, i)
{
    var ch = s.charCodeAt(i);
    WScript.Echo(ch);
}

var s = "Hello";


test(s, 0);
test(s, 1);


test(s, -1);
test(s, 10);


test(s, 2.32);
test(s, Math.PI);
