function f() {
    var varinits = [];
    var varnames = [];
    for (var i = 0; i < 19553; i++) {
        var varname = `x${i}`;
        varnames.push(varname);
        varinits.push(`${varname} = ${i}`);
    }
    var source = "var " + varinits.join(",") + ";\n";
    source += "for (var i = 0; i < 100; i++) {}\n";
    source += "return " + varnames.join("+") + ";";

    var g = new Function(source);
    print(g(), 191150128);
    print(g(), 191150128);
}
f();
