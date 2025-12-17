loadFile(`
    disassemble(function() {
	return print(x.concat(obj), [1, 2, 3, "hey"]);
    })
`);
function loadFile(lfVarx) {
    oomTest(new Function(lfVarx));
}
