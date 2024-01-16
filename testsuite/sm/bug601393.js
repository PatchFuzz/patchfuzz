


var code = "(function(){ function eval(){} function eval(){} ";
for (var i = 0; i < 2048; ++i) {
	code += " try{}catch(e){}";
}
code += " })()"
eval(code);
