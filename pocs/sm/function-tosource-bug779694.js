var x = "";
for (var i=0; i<400; ++i) {
    x += String.fromCharCode(i * 289);
}
var s = "'" + x + "'";
print(Function("evt", s).toString(), "function anonymous(evt\n) {\n" + s + "\n}");
