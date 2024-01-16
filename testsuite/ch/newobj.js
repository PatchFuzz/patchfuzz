




OldObject = Object;
Object = function()
{
    this.hello = "yay";
}

var o = new Object();
WScript.Echo(o.hello);

var o2 = { hello2 : "yay2" }

WScript.Echo(o2.hello);
WScript.Echo(o2.hello2);
