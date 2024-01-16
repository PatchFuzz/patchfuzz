













try {
    eval(`async((a))`);
    assert(false);
}
catch (e) {
    assert(e instanceof ReferenceError);
}

try {
    eval(`async(async((async((a)))))`);
    assert(false);
}
catch (e) {
    assert(e instanceof ReferenceError);
}

try {
    eval(`async((a)`);
    assert(false);
}
catch (e) {
    assert(e instanceof SyntaxError);
}

try {
    eval(`async((a)))`);
    assert(false);
}
catch (e) {
    assert(e instanceof SyntaxError);
}
