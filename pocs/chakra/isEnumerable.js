var x= { f: function() { return "hello"; } }
print(x.propertyIsEnumerable("f"));
print(x.propertyIsEnumerable("g"));
var e=new Array();
print(Array.propertyIsEnumerable("length"));
print(e.propertyIsEnumerable("length"));


