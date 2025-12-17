var n1 = Number.prototype.toFixed;
var s1 = String.prototype.split;
delete Number;
delete String;

var n2 = (5).toFixed;
var s2 = ("foo").split;


for (x in this) {}


var n3 = (5).toFixed;
var s3 = ("foo").split;

print(s1, s2);
print(s1, s3);
print(n1, n2);
print(n1, n3);
