try {
    eval("do { \
        return null; \
        } while (false);");
    assert (false);
} catch (e) {
    assert (e instanceof SyntaxError);
}
