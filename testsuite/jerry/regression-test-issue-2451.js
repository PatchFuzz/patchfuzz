













var src = "var a = 0; while(a) { switch(a) {" ;
for (var i = 0; i < 4000; i++)
    src += "-Infinity" + i + "\u00a0\u00a01.2e3";
src += "\udc00%f0%90%80%80\udc00";
print(src);
