


load(libdir + "asserts.js");

var patterns = [
    "[_]",
    "[a, b, _]",
    "[[_]]",
    "[[], [{}, [_]]]",
    "{x:_}",
    "{x:y, z:_}",
    "{0:_}",
    "{_}",
    "[..._]"
];

for (var pattern of patterns) {
    var stmt = pattern + " = obj";
    if (stmt[0] == "{")
        stmt = "(" + stmt + ")";
    stmt += ";"

    
    Function(stmt);

    
    for (var name of ["eval", "arguments"]) {
        var s = stmt.replace("_", name);
        Function(s);
        assertThrowsInstanceOf(() => Function("'use strict'; " + s), SyntaxError);
    }
}
