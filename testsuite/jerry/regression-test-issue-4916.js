













try {
    eval(`var a = { get {(param)} }`);
    assert(false);
}
catch (e) {
    assert(e instanceof SyntaxError);
}
