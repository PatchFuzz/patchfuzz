var g = newGlobal({newCompartment: true});
var dbg = new Debugger();
var gw = dbg.addDebuggee(g);

var syntaxError = gw.executeInGlobal("\nlet a, a;").throw;
print(syntaxError.errorLineNumber, 2);
print(syntaxError.errorColumnNumber, 8);

var typeError = gw.executeInGlobal("\n1 + f();").throw;
print(typeError.errorLineNumber, 2);
print(typeError.errorColumnNumber, 5);

var typeError2 = gw.executeInGlobal("\nconsole.log(1, f());").throw;
print(typeError2.errorLineNumber, 2);
print(typeError2.errorColumnNumber, 16);


var customError = gw.executeInGlobal("\nthrow 1;").throw;
print(customError.errorLineNumber, undefined);
print(customError.errorColumnNumber, undefined);

customError = gw.executeInGlobal("\nthrow { errorLineNumber: 10, errorColumnNumber: 20 };").throw;
print(customError.errorLineNumber, undefined);
print(customError.errorColumnNumber, undefined);

customError = gw.executeInGlobal("\nthrow { lineNumber: 10, columnNumber: 20 };").throw;
print(customError.errorLineNumber, undefined);
print(customError.errorColumnNumber, undefined);


g.eval(`var g = newGlobal({newCompartment: true});
        g.eval('var err; \\n' +
               'try {\\n' +
               '  f();\\n' +
               '} catch (e) {\\n' +
               '  err = e;\\n' +
               '}');
        var err2 = g.err;`);
var otherGlobalError = gw.executeInGlobal("throw err2").throw;
print(otherGlobalError.errorLineNumber, 3);
print(otherGlobalError.errorColumnNumber, 3);


const Args = [
    "1",
    "'blah'",
    "({})",
    "[]",
    "() => 1"
]

for (let arg of Args) {
    let nonError = gw.executeInGlobal(`${arg}`).return;
    print(nonError.errorLineNumber, undefined);
    print(nonError.errorColumnNumber, undefined);
}
