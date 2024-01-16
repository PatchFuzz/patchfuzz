




var o=new Object();
o.x=5;
o.y="why";
WScript.Echo(o["x"]);
var s="y";
WScript.Echo(o[s]);
o["y"]="yes";
WScript.Echo(o.y);
for (field in o) {
   WScript.Echo(o[field]);
}

