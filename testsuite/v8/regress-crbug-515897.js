



var r1 = new RegExp("\\\\/");
assertTrue(r1.test("\\/"));
var r2 = eval("/" + r1.source + "/");
assertEquals("\\\\\\/", r1.source);
assertEquals("\\\\\\/", r2.source);
