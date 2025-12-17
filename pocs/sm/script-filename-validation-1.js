;

setTestFilenameValidationCallback();


print(evaluate("2", {fileName: "safe.js"}), 2);
print(evaluate("eval(3)", {fileName: "safe.js"}), 3);
print(evaluate("Function('return 4')()", {fileName: "safe.js"}), 4);


function foo(x) {
    function bar(x) { return x + 1; }
    return bar(x);
}
print(foo(1), 2);


print(() => evaluate("throw 2", {fileName: "unsafe.js"}), InternalError);
print(() => evaluate("throw 2", {fileName: "system.js"}), InternalError);
print(() => evaluate("throw 2", {fileName: ""}), InternalError);
print(() => evaluate("throw 2"), InternalError);
print(() => eval("throw 2"), InternalError);
print(() => Function("return 1"), InternalError);
print(() => parseModule("{ function x() {} }"), InternalError);


var ex = null;
try {
    evaluate("throw 2", {fileName: "file://foo.js"});
} catch (e) {
    ex = e;
}
print(ex.toString(), "InternalError: unsafe filename: file://foo.js");


if (helperThreadCount() > 0) {
    offThreadCompileToStencil('throw 1');
    var stencil = finishOffThreadStencil();
    print(() => evalStencil(stencil), InternalError);
}


print(evaluate("2", {fileName: "unsafe.js", skipFileNameValidation: true}), 2);
print(evaluate("3", {skipFileNameValidation: true}), 3);


var systemRealm = newGlobal({newCompartment: true, systemPrincipal: true});
print(systemRealm.evaluate("1 + 2", {fileName: "system.js"}), 3);
print(systemRealm.evaluate("2 + 2", {fileName: "safe.js"}), 4);
print(() => systemRealm.evaluate("1 + 2", {fileName: "unsafe.js"}),
                       systemRealm.InternalError);
