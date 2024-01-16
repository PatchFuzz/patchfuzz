


var g = newGlobal({newCompartment: true});
var dbg = new Debugger();
var gw = dbg.addDebuggee(g);

var syntaxError = gw.executeInGlobal("\nlet a, a;").throw;
assertEq(syntaxError.errorLineNumber, 2);
assertEq(syntaxError.errorColumnNumber, 7);

var typeError = gw.executeInGlobal("\n1 + f();").throw;
assertEq(typeError.errorLineNumber, 2);
assertEq(typeError.errorColumnNumber, 1);


var customError = gw.executeInGlobal("\nthrow 1;").throw;
assertEq(customError.errorLineNumber, undefined);
assertEq(customError.errorColumnNumber, undefined);

customError = gw.executeInGlobal("\nthrow { errorLineNumber: 10, errorColumnNumber: 20 };").throw;
assertEq(customError.errorLineNumber, undefined);
assertEq(customError.errorColumnNumber, undefined);

customError = gw.executeInGlobal("\nthrow { lineNumber: 10, columnNumber: 20 };").throw;
assertEq(customError.errorLineNumber, undefined);
assertEq(customError.errorColumnNumber, undefined);


g.eval(`var g = newGlobal({newCompartment: true});
        g.eval('var err; \\n' +
               'try {\\n' +
               '  f();\\n' +
               '} catch (e) {\\n' +
               '  err = e;\\n' +
               '}');
        var err2 = g.err;`);
var otherGlobalError = gw.executeInGlobal("throw err2").throw;
assertEq(otherGlobalError.errorLineNumber, 3);
assertEq(otherGlobalError.errorColumnNumber, 3);


const Args = [
    "1",
    "'blah'",
    "({})",
    "[]",
    "() => 1"
]

for (let arg of Args) {
    let nonError = gw.executeInGlobal(`${arg}`).return;
    assertEq(nonError.errorLineNumber, undefined);
    assertEq(nonError.errorColumnNumber, undefined);
}
