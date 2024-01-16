





function test()
{
    var r = /a/;
    var r2 = r;
    var str = "a";
    WScript.Echo(r.exec(str));
    WScript.Echo(r === r2);
}

test();
test();
var g;
var oldExec = RegExp.prototype.exec;
RegExp.prototype.exec = function(str)
{
    g = this;
}
test();

WScript.Echo(oldExec.call(g, "a"));



