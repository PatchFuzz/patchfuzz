













var src = "var a = 0; while(a) { switch(a) {";

for (var i = 0; i < 3300; i++)
    src += "case " + i + ": a += a += a; break; ";
src += "} }";

eval(src);
