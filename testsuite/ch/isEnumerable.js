




var x= { f: function() { return "hello"; } }
WScript.Echo(x.propertyIsEnumerable("f"));
WScript.Echo(x.propertyIsEnumerable("g"));
var e=new Array();
WScript.Echo(Array.propertyIsEnumerable("length"));
WScript.Echo(e.propertyIsEnumerable("length"));


