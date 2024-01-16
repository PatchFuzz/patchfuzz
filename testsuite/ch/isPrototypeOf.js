




function write(v) { WScript.Echo(v + ""); }

var o = new Object();
var a = [11,12,13];
var d = new Date();

write("------------ isPrototypeOf ------------");
write(Object.prototype.isPrototypeOf(o));
write(Object.prototype.isPrototypeOf(a));

write(Array.prototype.isPrototypeOf(o));
write(Array.prototype.isPrototypeOf(a));


write(d.isPrototypeOf(d));
