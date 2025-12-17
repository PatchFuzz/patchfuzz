var r1 = new RegExp("\\\\/");
print(r1.test("\\/"));
var r2 = eval("/" + r1.source + "/");
print("\\\\\\/", r1.source);
print("\\\\\\/", r2.source);
