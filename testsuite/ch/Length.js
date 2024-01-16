




function write(v) { WScript.Echo(v + ""); }

var o = new Object();
o.length = 10;
write(o.length + " " + o["length"] + " " + o["len" + "gth"]);

o.length = 20;
write(o.length + " " + o["length"] + " " + o["len" + "gth"]);


var s = "Hello World";
write(s.length + " " + s["length"] + " " + s["len" + "gth"]);

var x = s.length = 30;

write(x);
write(s.length + " " + s["length"] + " " + s["len" + "gth"]);

var o1 = new Object();
var a = [1000,2000,3000];


write(a[0] + " " + a["0"] + " " + a[0.0]);


a.x = 40;

write(a.x + " " + a["x"]);


a[o] = 50;
write(a[o] + " " + a[o1] + " " + a["[object Object]"] + " " + a["[object" + " Object]"]);



write(a.length + " " + a["length"] + " " + a["len" + "gth"]);

a.length = 60;
write(a.length + " " + a["length"] + " " + a["len" + "gth"]);

a["length"] = 70;
write(a.length + " " + a["length"] + " " + a["len" + "gth"]);

a["le" + "ngth"] = 80;
write(a.length + " " + a["length"] + " " + a["len" + "gth"]);

function foo() {};
write(foo.length + " " + foo["length"] + " " + foo["len" + "gth"]);

function foo1(x) {};
write(foo1.length + " " + foo1["length"] + " " + foo1["len" + "gth"]);

function foo2(x,y,z) {};
write(foo2.length + " " + foo2["length"] + " " + foo2["len" + "gth"]);

eval("function foo3(x,y){};");
write(foo3.length + " " + foo3["length"] + " " + foo3["len" + "gth"]);
