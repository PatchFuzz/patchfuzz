




try {
    eval("function f1() { class c extends BaseClass { *f3(a = yield) { } } };");
    WScript.Echo('FAILED');
} catch (e) {
    if (e instanceof SyntaxError) {
        WScript.Echo('PASSED');
    } else {
        WScript.Echo('FAILED');
    }
}