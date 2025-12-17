try {
    eval(" \
    class foo { \
        constructor() { \
            function bar() {} \
        } \
    ")
} catch (e) {
    assert (e instanceof SyntaxError)
}
