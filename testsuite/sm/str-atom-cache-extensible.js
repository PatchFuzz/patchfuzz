
var extensible = "foo".repeat(50);
extensible += "bar";
extensible.indexOf("X");


var obj = {};
obj[extensible] = 1;


var other = extensible + "baz";
other.indexOf("X");


obj[extensible] = 1;
