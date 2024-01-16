



var lfcode = new Array();
lfcode.push("gczeal(4);");
lfcode.push("");
while (true) {
	var file = lfcode.shift();
	if (file == undefined) { break; }
        loadFile(file);
}
function loadFile(lfVarx) {
	eval(lfVarx);
}
