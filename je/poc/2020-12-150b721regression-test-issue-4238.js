













try {
    eval(" \
    class foo { \
        constructor() { \
            function bar() {} \
        } \
    ")
} catch (e) {
    print(e instanceof SyntaxError)
}
