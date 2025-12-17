try {
    eval("function f1() { class c extends BaseClass { *f3(a = yield) { } } };");
    print('FAILED');
} catch (e) {
    if (e instanceof SyntaxError) {
        print('PASSED');
    } else {
        print('FAILED');
    }
}