load(libdir + "asserts.js");

setTestFilenameValidationCallback();


assertEq(evaluate("2", {fileName: "safe.js"}), 2);
assertEq(evaluate("eval(3)", {fileName: "safe.js"}), 3);
assertEq(evaluate("Function('return 4')()", {fileName: "safe.js"}), 4);


function foo(x) {
    function bar(x) { return x + 1; }
    return bar(x);
}
assertEq(foo(1), 2);


assertThrowsInstanceOf(() => evaluate("throw 2", {fileName: "unsafe.js"}), InternalError);
assertThrowsInstanceOf(() => evaluate("throw 2", {fileName: "system.js"}), InternalError);
assertThrowsInstanceOf(() => evaluate("throw 2", {fileName: ""}), InternalError);
assertThrowsInstanceOf(() => evaluate("throw 2"), InternalError);
assertThrowsInstanceOf(() => eval("throw 2"), InternalError);
assertThrowsInstanceOf(() => Function("return 1"), InternalError);
assertThrowsInstanceOf(() => parseModule("{ function x() {} }"), InternalError);


var ex = null;
try {
    evaluate("throw 2", {fileName: "file://foo.js"});
} catch (e) {
    ex = e;
}
assertEq(ex.toString(), "InternalError: unsafe filename: file://foo.js");


if (helperThreadCount() > 0) {
    offThreadCompileToStencil('throw 1');
    var stencil = finishOffThreadStencil();
    assertThrowsInstanceOf(() => evalStencil(stencil), InternalError);
}


assertEq(evaluate("2", {fileName: "unsafe.js", skipFileNameValidation: true}), 2);
assertEq(evaluate("3", {skipFileNameValidation: true}), 3);


var systemRealm = newGlobal({newCompartment: true, systemPrincipal: true});
assertEq(systemRealm.evaluate("1 + 2", {fileName: "system.js"}), 3);
assertEq(systemRealm.evaluate("2 + 2", {fileName: "safe.js"}), 4);
assertThrowsInstanceOf(() => systemRealm.evaluate("1 + 2", {fileName: "unsafe.js"}),
                       systemRealm.InternalError);
